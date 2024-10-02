import { fork } from 'child_process';
import path from 'path';

const spawnChildProcess = async (args) => {
  fork(path.join(import.meta.dirname, 'files', 'script.js'), args);
};

// Put your arguments in function call to test this functionality
spawnChildProcess(['someArgument1', 'someArgument2', '...']);
