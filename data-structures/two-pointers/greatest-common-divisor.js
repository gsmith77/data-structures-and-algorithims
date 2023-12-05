const gcd = (x, y) => {
  if (!y) return x;
  return gcd(y, x % y);
};

console.log("gcd", gcd(52, 78));
