# Changelog
All notable changes to this project will be documented in this file.  
Releases are published only to npm, since there are no build artifacts to bundle.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).  
This project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).  

## v1.0.0 - 2025-02-15
### Changes
- Works with ESLint v9
- Upgrade .eslintrc -> eslint.config.js
- Remove Node 18 and add Node 22 to the `test.yml` GH Action
- Add CHANGELOG.md

### Audit
- Fix 1 vulnerability:
  - Regular Expression Denial of Service (ReDoS) in cross-spawn - https://github.com/advisories/GHSA-3xgq-45jj-v275

## v0.0.1 - 2024-05-09
### The initial release
- Works with ESLint v8
