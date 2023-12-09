/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0 || (typeof x === "string" && !x.length)) {
    return false;
  }

  const xAsStr = `${x}`;
  const splitX = [...xAsStr];
  let left = 0;
  let right = splitX.length - 1;

  while (left < right) {
    if (splitX[left] != splitX[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
};

function doTestsPass() {
  let tests = [
    [121, true],
    [-121, false],
    [10, false],
    ["x", true],
    ["xxx", true],
    ["xbx", true],
    ["xba", false],
  ];

  for (let test of tests) {
    if (isPalindrome(test[0]) !== test[1]) {
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
