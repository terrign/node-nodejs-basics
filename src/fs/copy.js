import fs from 'fs/promises';
import path from 'path';
import { exists } from '../utils/index.js';
import { FILES_DIR, FsError } from './const.js';

const DEST_PATH = path.join(import.meta.dirname, 'files_copy');

const copy = async () => {
  if (await exists(DEST_PATH)) {
    throw new FsError();
  }
  if (await exists(FILES_DIR)) {
    await fs.cp(FILES_DIR, DEST_PATH, { recursive: true });
  } else {
    throw new FsError();
  }
};

await copy();
