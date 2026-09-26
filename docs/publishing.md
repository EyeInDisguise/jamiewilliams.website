# Publishing

The source repository is `EyeInDisguise/jamiewilliams.website`.

`jamiewilliams.website` uses the existing GitHub Pages connection in `EyeInDisguise/EyeInDisguise.github.io`. The `notebook` branch contains only the built files. The original `main` branch is preserved so the old page can be restored by changing the Pages source back to `main`.

To update the custom domain:

1. Build and test the source, then commit and push it.
2. In a separate checkout of `EyeInDisguise.github.io`, switch to `notebook`.
3. Replace that checkout’s published files with the contents of `dist/`. Preserve `.git`. Ensure files for removed routes are removed from the published branch too.
4. Commit with the source commit SHA in the message, then push `notebook`.
5. Wait for the GitHub Pages deployment to succeed and check the domain. Keep `CNAME` and `.nojekyll` in the published root.
