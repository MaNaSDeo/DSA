function countUniqueValues(arr: Array<number | string>): number {
  if (arr.length === 0) return 0;
  let left = 0,
    right = 1;

  while (right < arr.length) {
    if (arr[left] === arr[right]) {
      right++;
    } else {
      arr[left + 1] = arr[right];
      left++;
    }
  }
  console.log("arr", arr);
  return left + 1;
}

const array3 = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];

console.log(countUniqueValues([]));
