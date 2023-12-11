const topKFrequent = function (nums, k) {
  // create a hash
  const hash = {};

  for (const n of nums) hash[n] ? hash[n]++ : (hash[n] = 1);

  // sort to get the highest keys at the beginning
  const sortedKeys = Object.keys(hash).sort((a, b) => hash[b] - hash[a]);

  const result = [];
  let i = 0;
  // push the k keys (numbers from nums) and return the top k frequent keys
  while (i < k) {
    result.push(sortedKeys[i]);
    i++;
  }

  return result;
};
