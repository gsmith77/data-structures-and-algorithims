/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  // "AABABBA", k = 2
  // create window using l and r pointers
  // objective:
  // increment r till we have a minimum of 2 each. Use a hash table to keep track

  let [l, r, max, tempMax] = [0, 0, 0, 0];
  const hash = { A: 0, B: 0 };

  while (r < s.length) {
    while (hash["A"] <= k || hash["B"] <= k) {
      if (r == s.length) break;
      console.log("rightLetter", s[r], tempMax);
      if (hash["A"] + 1 > k && hash["B"] + 1 > k) break;
      tempMax++;
      hash[s[r]]++;
      r++;
    }
    // console.log("hash", hash, tempMax);
    // we now have minimum of k (2) for each A and B
    max = Math.max(max, tempMax);

    // move l till we have k (2) of each again
    // then make it to where we do the first while loop
    while ((hash["A"] + hash["B"]) / 2 > k) {
      // decrement hash[s[l]]
      const leftLetter = s[l];
      hash[leftLetter]--;
      l++;
    }
    tempMax = 0;
  }
  return max;
};

console.log("characterReplacement result", characterReplacement("AABABBA", 1));
