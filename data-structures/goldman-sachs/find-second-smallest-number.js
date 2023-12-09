// const secondSmallest = (arr) => {
//   if (arr.length < 2) {
//     return "";
//   }
//   let firstLowest = Infinity;
//   let secondLowest = Infinity;
//   let thirdLowest = Infinity;

//   // FOR LOOP SOLUTION
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < firstLowest) {
//       thirdLowest = secondLowest;
//       secondLowest = firstLowest;
//       firstLowest = arr[i];
//     } else if (arr[i] < secondLowest) {
//       thirdLowest = secondLowest;
//       secondLowest = arr[i];
//     } else if (arr[i] < thirdLowest) {
//       thirdLowest = arr[i];
//     }
//   }
//   return [firstLowest, secondLowest, thirdLowest];
// };

// console.log(
//   "secondSmallest",
//   secondSmallest([100, -25, -50, 0, 5, 10, 15, -100])
// );

// // O(log n)
// // USE THIS AS THIS FINDS ALL THE NUMBERS NOT JUST THE SECOND ONE!
const findNSmallestNumbers = (arr, n) => {
  // find n smallest numbers in the arr

  if (!arr || arr.length < n) {
    return arr;
  }

  // create new arr
  let nArr = [...arr];
  const result = [];
  // when you find the lowest number
  // add that into the result array
  // delete that item from the arr

  while (result.length < n) {
    // use two pointers
    let left = 0;
    let right = nArr.length - 1;
    let minIdx = -1;
    // once we have gotten the numbers side by side
    while (left + 1 < right) {
      if (nArr[left] > nArr[right]) {
        minIdx = right;
        left++;
      } else if (nArr[right] > nArr[left]) {
        minIdx = left;
        right--;
      }
    }
    result.push(nArr[minIdx]);
    nArr.splice(minIdx, 1);
  }

  return result.slice(0, n);
};

console.log(
  "findNSmallestNumbers",
  findNSmallestNumbers([-1000, 100, 0, -2000, -30000, -85, 5, 233, 35], 5)
);

// [-100, 100, 0, -200]
//   l              r

const secondSmallest2 = (arr) => {
  let firstSmallest = Infinity;
  let secondSmallest = Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (firstSmallest > arr[i]) {
      secondSmallest = firstSmallest;
      firstSmallest = arr[i];
    } else if (secondSmallest > arr[i]) {
      secondSmallest = arr[i];
    }
  }
  return secondSmallest;
};

console.log(
  "secondSmallest",
  secondSmallesta([-1000, 100, 0, -2000, -30000, -85, 5, 233, 35])
);
