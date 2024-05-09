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
