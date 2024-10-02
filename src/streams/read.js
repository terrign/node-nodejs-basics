import path from 'path';
import fsSync from 'fs';
import { FILES_DIR } from './const.js';
import { pipeline } from 'stream/promises';

const FILE_PATH = path.join(FILES_DIR, 'fileToRead.txt');

const read = async () => {
  pipeline(
    fsSync.createReadStream(FILE_PATH).on('end', () => {
      process.stdout.write('\n');
    }),
    process.stdout
  );
};

await read();
