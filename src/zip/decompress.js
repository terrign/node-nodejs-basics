import { createReadStream, createWriteStream } from 'fs';
import { createUnzip } from 'zlib';
import path from 'path';
import { pipeline } from 'stream/promises';
import { FILES_DIR } from './const.js';

const FILE_PATH = path.join(FILES_DIR, 'fileToCompress.txt.gz');

const compress = async () => {
  pipeline(createReadStream(FILE_PATH), createUnzip(), createWriteStream(path.join(FILES_DIR, 'decompressed.txt')));
};

await compress();
