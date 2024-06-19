// Find first missing positive number in array

/**
 * Problem Description
Given an unsorted array of integers, find the smallest missing positive integer. The space complexity need not be O(1), you can also implement a O(N) space complexity solution.

Input format
There are 2 lines of input.

First line contains 1 integer N - Number of elements in the array.

Second line contains space separated N integers.

Output format
Print the smallest missing positive integer.

Sample Input 1
4

3 4 -1 1

Sample Output 1
2

Explanation 1
2 is the smallest positive integer which is missing as 1 is already present in the array. Note that 0 will not be considered as positive.

Constraints
N <= 200000

-2 ^ 31 <= Range of values <= 2 ^ 31 - 1
 */
const array12 = [3, 4, -1, 1];

function findFirstMissingPositiveNumberInArrayBrutForce(arr: number[]): number {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    if (arr[0] === 1) {
      return 2;
    } else return 1;
  }
  let newArr = arr.sort(); //TC - O(nlogn)

  let compare = 0;
  for (let i = 0; i < newArr.length; i++) {
    // TC - 0(n)
    // [ -1, 1, 3, 4 ]
    /**
     * compare = 1
     * i = 1
     * newArr[i] = 1
     * compare + 1 = 0 + 1 = 1
     */
    if (newArr[i] > 0) {
      if (compare + 1 !== newArr[i]) return compare + 1;
      else compare = newArr[i];
    }
  }
  return -1;
}

const resultFindFirstMissingPositiveNumberInArrayBrutForce =
  findFirstMissingPositiveNumberInArrayBrutForce(array12);

// console.log(resultFindFirstMissingPositiveNumberInArrayBrutForce);

function findFirstMissingPositiveNumberInArray(arr: number[]): number {
  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    if (arr[0] === 1) {
      return 2;
    } else return 1;
  }
  const map1 = new Map();
  for (let i = 0; i < arr.length; i++) {
    // TC - O(n)
    map1.set(arr[i], 1);
  }
  for (let i = 1; i < map1.size; i++) {
    // TC - O(n)
    if (!map1.has(i)) return i;
  }
  return -1;
}
const resultFindFirstMissingPositiveNumberInArray =
  findFirstMissingPositiveNumberInArray(array12);

console.log(resultFindFirstMissingPositiveNumberInArray);
