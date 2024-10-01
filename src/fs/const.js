import path from 'path';
import { red } from '../utils/index.js';

class FsError extends Error {
  constructor() {
    super(red`FS operation failed`);
  }
}
const FILES_DIR = path.resolve(import.meta.dirname, 'files');

export { FILES_DIR, FsError };
