/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (!strs || !strs.length) {
    return "";
  }

  let commonPrefix = "";
  let done = false;
  let letterIndex = 0;

  while (!done) {
    let letter = strs[0][letterIndex];
    if (!letter) {
      return commonPrefix;
    }
    // look at the other words to make sure the letter at letterIndex matches the first word at letterIndex
    for (i = 1; i < strs.length; i++) {
      if (strs[i][letterIndex] !== letter) {
        done = true;
        break;
      }
    }
    if (done) return commonPrefix;
    commonPrefix += letter;
    letterIndex++;
  }

  return commonPrefix;
};

function doTestsPass() {
  let tests = [
    [["flower", "flow", "flight"], "fl"],
    [["dog", "racecar", "car"], ""],
    [["body", "bodi", "bodiful"], "bod"],
    [[""], ""],
  ];

  for (let test of tests) {
    if (longestCommonPrefix(test[0]) !== test[1]) {
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
