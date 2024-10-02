import { Worker } from 'worker_threads';
import { cpus } from 'os';
import path from 'path';

const CPUS_COUNT = cpus().length;
const WORKER_PATH = path.join(import.meta.dirname, './worker.js');

const performCalculations = async (seed = 10) => {
  const promises = new Array(CPUS_COUNT).fill(null).map(
    (_, i) =>
      new Promise((resolve) => {
        const worker = new Worker(WORKER_PATH, { workerData: { value: seed + i } });
        worker.on('error', () => resolve({ status: 'error', data: null }));
        worker.on('message', ({ data }) => resolve({ status: 'resolved', data }));
      })
  );
  Promise.allSettled(promises)
    .then((it) => it.map(({ value }) => value))
    .then(console.log);
};

await performCalculations();
