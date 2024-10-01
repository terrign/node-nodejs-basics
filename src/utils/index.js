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

/**
 * Changes color of provided string in console output to blue
 * @param {string} str
 * @returns {string}
 */
const blue = (str) => `\x1b[34m${str}\x1b[0m`;

/**
 * Changes color of provided string in console output to red
 * @param {string} str
 * @returns {string}
 */
const red = (str) => `\x1b[31m${str}\x1b[0m`;

export { exists, blue, red };
