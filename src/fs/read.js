import fs from 'fs/promises';
import path from 'path';
import { exists } from '../utils/index.js';
import { FILES_DIR, FsError } from './const.js';

const FILE_PATH = path.join(FILES_DIR, 'fileToRead.txt');

const read = async () => {
  if (await exists(FILE_PATH)) {
    console.log(await fs.readFile(FILE_PATH, 'utf-8'));
  } else {
    throw new FsError();
  }
};

await read();
