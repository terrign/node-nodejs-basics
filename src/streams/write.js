import path from 'path';
import fsSync from 'fs';
import { FILES_DIR } from './const.js';
import { pipeline } from 'stream/promises';

const FILE_PATH = path.join(FILES_DIR, 'fileToWrite.txt');

const write = async () => {
  pipeline(process.stdin, fsSync.createWriteStream(FILE_PATH, { flags: 'a' }));
};

await write();
