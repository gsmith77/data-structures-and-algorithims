// const sortBitArray = (arr) => {
//   let left = 0;
//   let right = arr.length - 1;

//   // manipulate the array

//   while (left < right) {
//     // if left == 1 && right == 0 swap arr[left] and arr[right]
//     // OR if right == 0 && left == 1 swap arr[left] and arr[right]
//     if (
//       (arr[left] == 1 && arr[right] == 0) ||
//       (arr[right] == 0 && arr[left] == 1)
//     ) {
//       console.log("arr before", arr);
//       [arr[left], arr[right]] = [arr[right], arr[left]];
//       console.log("arr after", arr);
//     }
//     //  if left == 0 left++;
//     // else if right == 1 right--;
//     if (arr[left] == 0) {
//       console.log("left", left);
//       left++;
//     }
//     if (arr[right] == 1) {
//       console.log("right", right);
//       right--;
//     }
//   }
//   return arr;
// };

// console.log(
//   "sortBitArray",
//   sortBitArray([
//     1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0,
//     0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0,
//   ])
// );

// // [0, 1, 1, 0, 1, 1, 1, 0]
// // if left == 1 move up to a 1
// // if right == 0
// // [0, 1, 0, 1, 0]
// //  l           r
// //     l        r

function twoSum(numbers, target) {
  let hash = {};
  let current;
  for (let i = 0; i < numbers.length; i++) {
    current = numbers[i];
    console.log("hash[current]", hash);
    if (hash[current]) {
      return true;
    }
    hash[target - current] = [];
  }
  return false;
}

console.log("twoSum", twoSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 16));
