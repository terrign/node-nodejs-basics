import fs from 'fs/promises';
import path from 'path';
import { exists } from '../utils/index.js';
import { FILES_DIR, FsError } from './const.js';

const FILE_PATH = path.join(FILES_DIR, 'fileToRemove.txt');

const remove = async () => {
  if (await exists(FILE_PATH)) {
    await fs.unlink(FILE_PATH);
  } else {
    throw new FsError();
  }
};

await remove();
