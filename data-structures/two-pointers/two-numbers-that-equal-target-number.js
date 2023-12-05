const getTheTwoNumbersThatEqualTheTargetNumber = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  const result = [];

  while (left < right) {
    if (arr[left] + arr[right] === target) {
      return [arr[left], arr[right]];
    }

    // right the highest already so we need to increment the left side to get a bigger nunber from the left to equal the target
    if (arr[left] + arr[right] < target) {
      left++;
    }
    // right the highest already so we need to decrement the right side to get a smaller nunber from the right to equal the target
    else if (arr[left] + arr[right] > target) {
      right--;
    }
  }
  return result;
};

console.log(
  "getTheTwoNumbersThatEqualTheTargetNumber",
  getTheTwoNumbersThatEqualTheTargetNumber([1, 2, 3, 6, 8, 4, 5, 7, 9, 10], 19)
);
