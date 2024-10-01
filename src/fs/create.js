import fs from 'fs/promises';
import path from 'path';
import { exists } from '../utils/index.js';
import { FILES_DIR, FsError } from './const.js';

const FILE_PATH = path.join(FILES_DIR, 'fresh.txt');

const create = async () => {
  if (await exists(FILE_PATH)) {
    throw new FsError();
  } else {
    await fs.writeFile(FILE_PATH, 'I am fresh and young');
  }
};

await create();
