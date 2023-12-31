/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // two pointers
  let l = 0;
  const resultSet = new Set();

  const twoSumArr = [];
  const numsHash = {};
  const sortedNums = nums.sort();

  sortedNums.forEach((n, i) => (numsHash[n] = n));

  // create twoSumArr
  for (let r = 1; r < sortedNums.length; r++) {
    const sum = sortedNums[l] + sortedNums[r];
    // need to fix here
    twoSumArr.push([sum, sortedNums[l], sortedNums[r]]);
  }
  //   console.log("twoSumArr", twoSumArr);

  //   create 3sum result
  for (let i = 0; i < twoSumArr.length; i++) {
    const currentTwoSum = twoSumArr[i];
    const sum = currentTwoSum[0];
    const oppositeNumber = Math.sign(sum) < 0 ? Math.abs(sum) : -Math.abs(sum);
    // console.log("originalSum", sum);
    // console.log("oppositeNumber", oppositeNumber);
    // console.log(
    //   "does numsHash has oppositeNumber?",
    //   numsHash[oppositeNumber] >= 0,
    //   [numsHash[oppositeNumber], ...currentTwoSum.slice(1)]
    // );
    const arr = [numsHash[oppositeNumber], ...currentTwoSum.slice(1)];
    // I have the "correct answer" but it contains duplicates of the correct answers
    if (numsHash[oppositeNumber] != undefined) {
      resultSet.add(arr);
    }
  }

  //   console.log("twoSumArr", twoSumArr);
  //   console.log("result", result);

  return [...resultSet];
};

console.log(
  "threeSum result [-1, 0, 1, 2, -1, -4] => ",
  threeSum([-1, 0, 1, 2, -1, -4])
); // [[-1,-1,2],[-1,0,1]]
// console.log("threeSum result [0,1,1] => ", threeSum([0, 1, 1])); // []
// console.log("threeSum result [0,0,0] => ", threeSum([0, 0, 0])); // [0, 0, 0]
