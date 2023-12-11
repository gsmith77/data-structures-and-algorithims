/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  if (!nums || !nums.length) {
    return [];
  }

  // loop
  // do target - nums[i] and see if the hash contains the result.
  // this would mean there is a number inside of nums that nums[i] + otherNumber does equal target

  // create a hash during for loop
  const hash = {};

  for (let i = 0; i < nums.length; i++) {
    const subtraction = target - nums[i];
    if (hash[subtraction] !== undefined) {
      return [hash[subtraction], i];
    }
    // make key the number and the value the index of the number;
    hash[nums[i]] = i;
  }

  return [];
};

function doTestsPass() {
  let tests = [
    [
      [[2, 7, 11, 15], 9],
      [0, 1],
    ],
    [
      [[3, 2, 4], 6],
      [1, 2],
    ],
    [
      [[3, 3], 6],
      [0, 1],
    ],
    [
      [[-1, -2, -3, -4, -5], -8],
      [2, 4],
    ],
  ];

  for (let test of tests) {
    const [first, second] = twoSum(test[0][0], test[0][1]);
    if (first !== test[1][0] && second !== test[1][1]) {
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
