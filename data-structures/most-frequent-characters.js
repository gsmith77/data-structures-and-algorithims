const maxFrequencyOfCharacter = (str, characterAmount = 1) => {
  if (!str || typeof str !== "string") {
    return "";
  }

  const { max, ...frequencyHash } = str.split("").reduce(
    (acc, curr) => {
      if (!acc[curr]) acc[curr] = 1;
      else if (acc[curr]) acc[curr]++;
      if (acc.max < acc[curr]) acc.max = acc[curr];
      return acc;
    },
    { max: 0 }
  );

  const result = Object.keys(frequencyHash).reduce((acc, currKey) => {
    if (frequencyHash[currKey] == max) {
      acc.push({ [currKey]: frequencyHash[currKey] });
    }
    return acc;
  }, []);

  return result.slice(0, characterAmount);
};

console.log("maxFrequencyOfCharacter", maxFrequencyOfCharacter("aabbaabb", 2));
