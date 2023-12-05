function binarySearch(arr, target) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    console.log("arr[mid]", arr[mid]);
    if (arr[mid] == target) {
      return mid;
    }
    if (arr[mid] > target) {
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    }
  }

  return -1;
}

console.log(
  "binarySearch",
  binarySearch([1, 3, 4, 5, 6, 7, 8, 10, 11, 13, 15, 17, 20, 22], 17)
);
