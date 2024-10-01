import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import path from 'path';

const SRC_PATH = path.join(import.meta.dirname, 'files', 'fileToCalculateHashFor.txt');

const calculateHash = async () => {
  const hash = createHash('sha256');
  createReadStream(SRC_PATH)
    .on('data', (chunk) => {
      hash.update(chunk);
    })
    .on('end', () => {
      console.log(hash.digest('hex'));
    });
};

await calculateHash();
