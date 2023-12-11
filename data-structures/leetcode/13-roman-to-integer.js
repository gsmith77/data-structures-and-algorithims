const numbersToSymbols = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

const specialNumbers = {
  4: true,
  9: true,
  40: true,
  90: true,
  400: true,
  900: true,
};

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  if (!s || !s?.length) {
    return 0;
  }

  let result = 0;
  const splitStr = [...s];
  let i = splitStr.length - 1;

  // while loop starting from the right
  while (i >= 0) {
    const originalNumber = numbersToSymbols[splitStr[i]];
    // compare within bounds
    if (i - 1 > -1) {
      let symbolBefore = splitStr[i - 1];
      // if the number before it is smaller than do subtraction until you reach a bigger symbol/number
      if (numbersToSymbols[symbolBefore] < originalNumber) {
        // subtract from current number
        // until we reach a bigger number, or we reach the end
        let secondNumber = numbersToSymbols[symbolBefore];
        while (originalNumber > secondNumber) {
          result -= secondNumber;
          i--;
          symbolBefore = splitStr[i - 1];
          secondNumber = numbersToSymbols[symbolBefore];
        }
      }
    }
    result += originalNumber;
    i--;
  }
  return result;
};

function doTestsPass() {
  let tests = [
    ["III", 3],
    ["LVIII", 58],
    ["MCMXCIV", 1994],
    ["IV", 4],
    ["IX", 9],
    ["XC", 90],
  ];

  for (let test of tests) {
    if (romanToInt(test[0]) !== test[1]) {
      return false;
    }
  }
  return true;
}

if (doTestsPass()) {
  console.log("All tests pass");
} else {
  console.log("Not all tests pass");
}
