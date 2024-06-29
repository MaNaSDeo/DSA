// Remove duplicates such that each element occurs at most twice
/**
 * Problem Description
Given a sorted array, remove the duplicates in-place, such that each element in the array appears at most twice, and return the new length.

Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

Input format
There are two lines of input.

First line contains an integer n - Number of elements.

Second line contains n space separated integers - The array nums.

Output format
Print the new length in the first line.

In the second line print the nums array upto the new length.

Sample Input 1
7

2 2 2 3 4 4 9

Sample Output 1
6

2 2 3 4 4 9

Explanation 1
Your function should return 6 as the element 2 can only be present at most 2 times. So the first 6 elements of array nums should be modified to [2, 2, 3, 4, 4, 9].

Constraints
1 <= n <= 10^5

0 <= nums[i] <= 10^6
 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */

function removeDuplicatesFromSortedArrayIIBrutForce(
  n: number,
  arr: number[]
): number {
  let first = 0, //
    second = 1, //
    currentCount = 0, // 1
    resutlArr: number[] = [arr[0]]; // [2, 2, ]
  for (let i = 1; i < n; i++) {
    if (arr[first] === arr[second]) {
      // first = 4; arr[first] = 4;
      // second = 5; arr[second] = 4;
      // currentCount = 0 + 1 = 1
      if (currentCount < 1) {
        resutlArr.push(arr[first]);
      }
      currentCount++;
      second++;
    } else {
      resutlArr.push(arr[i]);
      currentCount = 0;
      first = i;
      second = i + 1;
    }
  }
  console.log("resutlArr", resutlArr);
  return resutlArr.length;
}
console.log(
  "removeDuplicatesFromSortedArrayIIBrutForce ",
  removeDuplicatesFromSortedArrayIIBrutForce(7, [2, 2, 2, 3, 4, 4, 9])
);

/**
 * @param {number[]} arr
 * @param {number} n
 * @return {number}
 */
function removeDuplicatesFromSortedArrayII(n: number, arr: number[]): number {
  if (n <= 2) return n;

  let writeIndex = 2;

  for (let readIndex = 2; readIndex < n; readIndex++) {
    if (arr[readIndex] !== arr[writeIndex - 2]) {
      arr[writeIndex] = arr[readIndex];
      writeIndex++;
    }
  }

  // Print the new length
  console.log(writeIndex);

  // Print the modified array up to the new length
  console.log(arr.slice(0, writeIndex).join(" "));

  return writeIndex;
}

console.log(
  "removeDuplicatesFromSortedArrayII",
  removeDuplicatesFromSortedArrayII(7, [2, 2, 2, 3, 4, 4, 9])
);
