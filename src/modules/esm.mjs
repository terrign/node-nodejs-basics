import { release, version } from 'os';
import { createServer } from 'http';
import { sep } from 'path';
import { readFile } from 'fs/promises';
import './files/c.js';

const { dirname, filename, url } = import.meta;

const random = Math.random();

let unknownObject;

if (random > 0.5) {
  unknownObject = JSON.parse(await readFile(new URL('./files/b.json', url)));
} else {
  unknownObject = JSON.parse(await readFile(new URL('./files/b.json', url)));
}

console.log(`Release ${release()}`);
console.log(`Version ${version()}`);
console.log(`Path segment separator is "${sep}"`);
console.log(`Path to current file is ${filename}`);
console.log(`Path to current directory is ${dirname}`);

const myServer = createServer((_, res) => {
  res.end('Request accepted');
});

const PORT = 3000;

console.log(unknownObject);

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log('To terminate it, use Ctrl+C combination');
});

export { unknownObject, myServer };
