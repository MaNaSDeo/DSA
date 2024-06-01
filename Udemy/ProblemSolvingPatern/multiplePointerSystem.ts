function sumZero(arr: Array<number>): Array<number> {
  let left = 0,
    right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  return [-1, -1];
}

const array = [-5, -4, -2, 0, 1, 3, 6];

console.log(sumZero(array));
