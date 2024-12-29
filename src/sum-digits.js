const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  function createMas(el) {
      const mas = Array.from(String(el), Number)
      return mas;
  }
  function sumMas(array) {
     return array.reduce((current, acc) => {
          acc += current;
          return acc;
      }, 0)
  }
  const mas_one = createMas(n)
  const res_one = sumMas(mas_one)
  if (res_one < 10) {
      return res_one;
  } else {
     const mas_two = createMas(res_one);
     const res_two = sumMas(mas_two);
     return res_two;
  }
}


module.exports = {
  getSumOfDigits
};
