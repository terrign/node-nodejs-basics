import fs from 'fs/promises';
import path from 'path';
import { exists } from '../utils/index.js';
import { FILES_DIR, FsError } from './const.js';

const WRONG_FILE_PATH = path.join(FILES_DIR, 'wrongFilename.txt');
const PROPER_FILE_PATH = path.join(FILES_DIR, 'properFilename.md');

const rename = async () => {
  if (await exists(WRONG_FILE_PATH)) {
    await fs.rename(WRONG_FILE_PATH, PROPER_FILE_PATH);
  } else {
    throw new FsError();
  }
};

await rename();
