import test from 'node:test';
import assert from 'node:assert/strict';

// A small DOM adapter exercises the controller's motion policy without a browser dependency.
function element(extra = {}) {
  return { value: '', textContent: '', disabled: false, attrs: {}, events: {},
    setAttribute(name, value) { this.attrs[name] = value; },
    addEventListener(name, handler) { this.events[name] = handler; }, ...extra };
}
test('reduced motion skips animation; changing the preference stops an active run', async () => {
  const slider = element({ value: '.35' });
  const nodes = Object.fromEntries(['output','[data-trace]','[data-dot]','[data-play]','[data-stop]','[data-regime]','[data-status]'].map(k=>[k,element()]));
  nodes.input = slider;
  const presets = [.35, 1, 1.8].map(n=>element({dataset:{preset:String(n)}}));
  const motion = element({matches:true});
  const document = element({ querySelector: () => ({ querySelector: s=>nodes[s], querySelectorAll: s=>s==='[data-preset]'?presets:[] }) });
  let scheduled = 0, cancelled = 0;
  const originals = new Map(['document','matchMedia','requestAnimationFrame','cancelAnimationFrame'].map(k=>[k,globalThis[k]]));
  Object.assign(globalThis,{document,matchMedia:()=>motion,requestAnimationFrame:()=>++scheduled,cancelAnimationFrame:()=>cancelled++});
  try {
    await import('../src/assets/spring.js');
    nodes['[data-play]'].events.click();
    assert.equal(scheduled,0);
    assert.equal(nodes['[data-dot]'].attrs.cx,'720');
    assert.match(nodes['[data-status]'].textContent,/At three seconds/);
    presets[1].events.click();
    assert.equal(nodes.output.value,'1.00');
    assert.equal(nodes['[data-regime]'].textContent,'Critically damped');
    motion.matches=false; motion.events.change(); nodes['[data-play]'].events.click();
    assert.equal(scheduled,1);
    assert.equal(nodes['[data-play]'].disabled,true);
    assert.equal(nodes['[data-stop]'].disabled,false);
    const before=cancelled;
    motion.matches=true; motion.events.change();
    assert.ok(cancelled>before);
    assert.equal(nodes['[data-play]'].disabled,false);
    assert.equal(nodes['[data-stop]'].disabled,true);
  } finally {
    for(const [key,value] of originals) { if(value===undefined) delete globalThis[key]; else globalThis[key]=value; }
  }
});
