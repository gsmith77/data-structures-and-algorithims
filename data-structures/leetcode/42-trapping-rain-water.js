// Explanation
// https://www.google.com/search?q=trap+rain+water+leetcode+explaination&source=lmns&tbm=vid&bih=600&biw=1307&hl=en&sa=X&ved=2ahUKEwiy68u5soODAxXEO0QIHU7bC7QQ0pQJKAF6BAgBEAQ#fpstate=ive&vld=cid:7673a22e,vid:ZI2z5pq0TqA,st:0

// Leetcode solution
// https://leetcode.com/problems/trapping-rain-water/solutions/400555/clean-javascript-solutions-brute-force-dynamic-programming-stack-two-pointers/

// Leetcode question
// https://leetcode.com/problems/trapping-rain-water/description/
// Level - Hard

// Time - O(n)
// Space - O(n)
// 1) Dynamic programming
// function trapRainWater(arr) {
//   if (arr == null || arr.length === 0) return 0;
//   let leftMax = arr[0];
//   let rightMax = arr[arr.length - 1];
//   const leftMaxes = [leftMax];
//   const rightMaxes = [rightMax];
//   let rainfall = 0;

//   // get the left maximums
//   // determine if the current value or the value to the left is the max
//   for (let i = 1; i < arr.length; i++) {
//     leftMax = Math.max(leftMax, arr[i]);
//     leftMaxes.push(leftMax);
//   }
//   // get the right maximums
//   // determine if the current value or the value to the right is the max
//   for (let i = arr.length - 2; i >= 0; i--) {
//     rightMax = Math.max(rightMax, arr[i]);
//     rightMaxes.unshift(rightMax);
//   }

//   // get the minimum wall and subtract it by the current height of the index we are at
//   // to find how much rainwater that index can hold
//   for (let i = 0; i < arr.length - 1; i++) {
//     const rain = Math.min(leftMaxes[i], rightMaxes[i]) - arr[i];
//     rainfall += rain;
//   }

//   console.log("leftMaxes", leftMaxes);
//   console.log("rightMaxes", rightMaxes);

//   return rainfall;
// }

// Time - O(n)
// Space - O(1)
// 2) Two Pointers
function trapRainWater(arr) {
  if (arr == null || arr.length === 0) return 0;

  let l = 0;
  let leftMax = arr[l];
  let r = arr.length - 1;
  let rightMax = arr[r];
  let rainfall = 0;

  while (l < r) {
    // minimum of the the left/right - arr[i] = rainfall
    leftMax = Math.max(leftMax, arr[l]);
    if (arr[l] < leftMax) {
      rainfall += leftMax - arr[l];
    }
    rightMax = Math.max(rightMax, arr[r]);
    if (arr[r] < rightMax) {
      rainfall += rightMax - arr[r];
    }

    // find the minimum of the left and right. Only want to work with the minimum
    arr[l] < arr[r] ? l++ : r--;
  }
  return rainfall;
}

function doTestsPass() {
  let tests = [
    [[2, 1, 3], 1],
    [[0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1], 6],
    [[0, 1, 3, 0, 1, 2, 0, 4, 2, 0, 3, 0], 13],
    [[2, 1, 3, 0, 1, 2, 0, 4, 2, 0, 3, 0], 14],
  ];

  for (let test of tests) {
    if (trapRainWater(test[0]) !== test[1]) {
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
