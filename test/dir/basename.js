import { basename } from 'node:path';

export default function getBasename(path) {
  return basename(path);
}
