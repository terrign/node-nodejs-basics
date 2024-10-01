import { blue } from '../utils/index.js';
import { RSS_PREFIX } from './const.js';

const parseEnv = () => {
  const args = process.env;
  const keys = Object.keys(args);
  let res = '';
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if (key.startsWith(RSS_PREFIX)) {
      res += `${blue(key)}=${args[key]}; `;
    }
  }
  console.log(res.slice(0, -2));
};

parseEnv();
