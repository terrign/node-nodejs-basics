import { createReadStream, createWriteStream } from 'fs';
import { createGzip } from 'zlib';
import path from 'path';
import { pipeline } from 'stream/promises';
import { FILES_DIR } from './const.js';

const FILE_PATH = path.join(FILES_DIR, 'fileToCompress.txt');

const compress = async () => {
  pipeline(createReadStream(FILE_PATH), createGzip(), createWriteStream(path.join(FILES_DIR, 'fileToCompress.txt.gz')));
};

await compress();
