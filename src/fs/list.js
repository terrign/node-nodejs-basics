import fs from 'fs/promises';
import { exists } from '../utils/index.js';
import { FILES_DIR, FsError } from './const.js';

const list = async () => {
  if (exists(FILES_DIR)) {
    console.log(await fs.readdir(FILES_DIR));
  } else {
    throw new FsError();
  }
};

await list();
