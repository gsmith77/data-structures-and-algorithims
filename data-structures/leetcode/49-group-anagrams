/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  // strs ["eat","tea","tan","ate","nat","bat"]
  // make the strings equal so you know all the words are anagrams and you can put into that anagram's array

  const sortedStrs = strs.map((str) => [...str].sort().join(""));

  const hash = {};

  for (let i = 0; i < sortedStrs.length; i++) {
    const originalStr = strs[i];
    const sortedStr = sortedStrs[i];
    hash[sortedStr]
      ? hash[sortedStr].push(originalStr)
      : (hash[sortedStr] = [originalStr]);
  }

  return Object.values(hash);
};
// Time Complexity: O(n*k) where n is the size of input array and k is the maximum length of string in input array
// Space Complexity: O(n)
