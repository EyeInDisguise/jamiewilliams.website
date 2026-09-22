import test from 'node:test';
import assert from 'node:assert/strict';
import { response } from '../src/assets/spring-model.js';

test('a spring starts at rest and tends to its target', () => {
  for (const damping of [.05, .35, .95, 1, 1.05, 1.8, 2]) {
    assert.equal(response(0, damping), 0);
    assert.ok(Math.abs(response(.000001, damping)) < 1e-9);
    assert.ok(Math.abs(response(100, damping) - 1) < 1e-9);
  }
});
test('underdamping overshoots; critical and overdamped responses remain monotonic', () => {
  assert.ok(response(Math.PI / (9 * Math.sqrt(1 - .35 ** 2)), .35) > 1.3);
  for (const damping of [1, 1.01, 1.8, 2]) {
    let previous = 0;
    for (let i = 0; i < 600; i++) {
      const position = response(i / 100, damping);
      assert.ok(position >= previous - 1e-12 && position <= 1 + 1e-12);
      previous = position;
    }
  }
});
test('the three solutions meet continuously at critical damping', () => {
  for (const t of [.1, .5, 1, 3]) {
    const critical = response(t, 1);
    assert.ok(Math.abs(response(t, .99999) - critical) < .00002);
    assert.ok(Math.abs(response(t, 1.00001) - critical) < .00002);
  }
});
test('the analytic solution satisfies the differential equation', () => {
  const h = .0001, omega = 9;
  for (const damping of [.05, .35, 1, 1.8, 2]) {
    for (const t of [.1, .5, 1]) {
      const before = response(t-h,damping), x = response(t,damping), after = response(t+h,damping);
      const velocity = (after-before)/(2*h), acceleration = (after-2*x+before)/(h*h);
      assert.ok(Math.abs(acceleration + 2*damping*omega*velocity + omega*omega*x - omega*omega) < .001);
    }
  }
});
