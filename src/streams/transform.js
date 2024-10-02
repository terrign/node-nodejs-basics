import { pipeline } from 'stream/promises';
import { yellow } from '../utils/index.js';

const transform = async () => {
  pipeline(
    process.stdin,
    async function* (source) {
      for await (const chunk of source) {
        yield yellow(chunk.reverse().toString().trim()) + '\n';
      }
    },
    process.stdout
  );
};

await transform();
