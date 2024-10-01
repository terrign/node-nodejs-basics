import { ARG_PREFIX, blue, white } from './const.js';

const parseArgs = () => {
  const args = process.argv;
  let res = '';
  for (let i = 0; i < args.length; i++) {
    const it = args[i];
    if (it.startsWith(ARG_PREFIX)) {
      res += blue(it.slice(2)) + white(` is ${args[i + 1]}`) + ', ';
    }
  }
  console.log(res.slice(0, -2));
};

parseArgs();
