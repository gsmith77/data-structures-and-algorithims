const secondSmallest = (arr) => {
  if (arr.length < 2) {
    return "";
  }
  // use two points

  let left = 0;
  let right = arr.length - 1;
  //   RECURSION SOLUTION
  //   const findNumber = (left, right) => {
  //     // reach the end of comparing
  //     if (left + 1 == right) {
  //       return arr[left] > arr[right] ? arr[left] : arr[right];
  //     }

  //     if (arr[left] > arr[right]) {
  //       // get a smaller number on the left
  //       return findNumber(left + 1, right);
  //     } else if (arr[left] < arr[right]) {
  //       // get a smaller number on the right
  //       return findNumber(left, right - 1);
  //     }
  //   };

  //   const secondMin = findNumber(0, arr.length - 1);
  //   return secondMin;

  //   WHILE LOOP SOLUTION
  //   while (!secondMin) {
  //     if (left + 1 == right) {
  //       secondMin = arr[left] > arr[right] ? arr[left] : arr[right];
  //     }
  //     console.log("left", left, right);
  //     if (arr[left] > arr[right]) {
  //       // get a smaller number on the left
  //       left++;
  //     } else if (arr[left] < arr[right]) {
  //       // get a smaller number on the right
  //       right--;
  //     }
  //   }
  //   return secondMin;

  let firstLowest = Infinity;
  let secondLowest = Infinity;
  let thirdLowest = Infinity;

  // FOR LOOP SOLUTION
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < firstLowest) {
      thirdLowest = secondLowest;
      secondLowest = firstLowest;
      firstLowest = arr[i];
    } else if (arr[i] < secondLowest) {
      thirdLowest = secondLowest;
      secondLowest = arr[i];
    } else if (arr[i] < thirdLowest) {
      thirdLowest = arr[i];
    }
  }
  return [firstLowest, secondLowest, thirdLowest];
};

console.log(
  "secondSmallest",
  secondSmallest([100, -25, -50, 0, 5, 10, 15, -100])
);

//[-44, 0, -77, -78, 5, 6, 11]
//  l                       r
//  l                    r
//  l                r
//  l             r
//      l         r
//          l     r
// left < right

// USE THIS AS THIS FINDS ALL THE NUMBERS NOT JUST THE SECOND ONE!
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
