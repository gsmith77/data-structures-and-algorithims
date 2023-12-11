// Solution and Time and Space Complexity
// https://chat.openai.com/c/18732471-dcfe-4d0a-b098-efce2b3409fe
// Youtube explaing this problem -https://www.youtube.com/watch?v=tPr5Uae6Drc
// Leetcode = https://leetcode.com/problems/reaching-points/submissions/

// Time - Big O(log(tx, ty))
// Space - Big O(1)

// Level: Hard
/**
 * @param {number} sx
 * @param {number} sy
 * @param {number} tx
 * @param {number} ty
 * @return {boolean}
 */
function reachingPoints(sx, sy, tx, ty) {
  while (tx >= sx && ty >= sy) {
    if (sx === tx && sy === ty) return true;
    if (tx > ty) {
      if (sy === ty) return (tx - sx) % ty === 0;
      tx %= ty;
    } else {
      if (sx === tx) return (ty - sy) % tx === 0;
      ty %= tx;
    }
  }
  return false;
}

// Example usage
console.log(reachingPoints(1, 1, 3, 5)); // true or false depending on the input values
