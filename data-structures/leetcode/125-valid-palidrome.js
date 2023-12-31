/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  const word = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  console.log("word", word);
  // determine if it is a palidrome
  // forwards = backwards
  // two pointers

  let l = 0;
  let r = word.length - 1;

  while (l < r) {
    if (word[l] !== word[r]) {
      return false;
    }
    l++;
    r--;
  }

  return true;
};

function doTestsPass() {
  let tests = [
    ["A man, a plan, a canal: Panama", true],
    ["race a car", false],
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
