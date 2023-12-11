/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (
    (typeof x === "number" && x == undefined) ||
    (typeof x === "string" && !x)
  ) {
    return false;
  }

  const xAsStr = `${x}`;

  let l = 0;
  let r = xAsStr.length - 1;

  while (l < r) {
    const left = xAsStr[l];
    const right = xAsStr[r];
    if (left !== right) {
      return false;
    }
    l++;
    r--;
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
