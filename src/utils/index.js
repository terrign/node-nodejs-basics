import fs from 'fs/promises';

/**
 * If path exists, resolves with true, otherwise resolves with false.
 * @param {string} path Path to file
 * @returns {Promise<boolean>}
 */
const exists = (path) =>
  fs
    .access(path)
    .then(() => true)
    .catch(() => false);

const colorMap = {
  blue: '\x1b[34m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
};

const cc = (color) => (str) => `${colorMap[color]}${str}\x1b[0m`;
/**
 * Changes color of string in console to red
 */
const red = cc('red');
/**
 * Changes color of string in console to blue
 */
const blue = cc('blue');
/**
 * Changes color of string in console to yellow
 */
const yellow = cc('yellow');

export { exists, blue, red, yellow };
