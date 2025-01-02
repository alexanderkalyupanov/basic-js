const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let obj1 = {};
  let obj2 = {};
  let commonCounter = 0;
  for (let ch of s1) {
    obj1[ch] = (obj1[ch] || 0) + 1;
  }
  for (let ch of s2) {
    obj2[ch] = (obj2[ch] || 0) + 1;
  }
  for (let item in obj1) {
    if (obj2[item]) {
      commonCounter += Math.min(obj1[item], obj2[item])
    }
  }
  return commonCounter;
}

module.exports = {
  getCommonCharacterCount
};
