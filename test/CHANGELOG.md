# The inner 'test' project


## v1.0.1 - 2025-02-16
### Changes
- Update dependencies to the min version which supports ESLint v9

## v1.0.0 - 2025-02-15
### Changes
- Works with ESLint v9
- Upgrade .eslintrc -> eslint.config.js
- Add comment to `index.js` explaining why it needs to have lint issues
- Add CHANGELOG.md

#### Audit
- Fix 2 vulnerabilities
  - Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275
  - Webpack's AutoPublicPathRuntimeModule has a DOM Clobbering Gadget that leads to XSS - https://github.com/advisories/GHSA-4vvj-4cpr-p986

## v0.0.1 - 2024-05-09
### The initial release
- Works with ESLint v8
