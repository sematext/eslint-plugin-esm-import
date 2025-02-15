import { resolve } from 'node:path';
import './dir';
import basename from 'Dir';
import 'Dir/index.js';
export * from 'Dir/basename';
import './foo';
import './foo.json';
import './foo?qs'; // not-auto-fixable
import './Dir?qs'; // not-auto-fixable

export default basename(resolve('.'));

/*
  The purpose of this file is to demo the plugin's ability to detect and fix incorrect imports.
  That is why ESLint detects 6 issues in this file.
*/