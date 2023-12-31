/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (numbers, target) {
  let l = 0;
  let r = numbers.length - 1;

  while (l < r) {
    // push indexes into result array
    if (numbers[l] + numbers[r] === target) {
      return [l + 1, r + 1];
    } else if (numbers[l] + numbers[r] > target) {
      r--;
    } else if (numbers[l] + numbers[r] < target) {
      l++;
    }
  }

  return [];
};
// Time - O(n) loops over all the numbers
// Space = O(1)
function doTestsPass() {
  let tests = [
    [[2, 7, 11, 15], 9, [1, 2]],
    [[2, 3, 4], 6, [1, 3]],
    [[-1, 0], -1, [1, 2]],
  ];

  for (let test of tests) {
    const result = twoSum(test[0], test[1]);
    if (result[0] !== test[2][0] && result[1] !== test[2][1]) {
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
