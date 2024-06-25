// Find Pair with Given Sum in Sorted Array

/**
 * Problem Description
Given a sorted array of integers and a target, find if there’s a pair of elements that add up to the target. Return true if such a pair can be found, and false otherwise.

Input format
There are 3 lines of input.

First line contains an Integer N that represents the number of elements in the array.

Second line contains N space separated integers, which are members of the array.

Third line contains an integer X, which is the target value.

Output format
Print "Present" if there is such a pair present in the array otherwise print "Not Present".

Constraints
2 <= Length of array <= 10^5

1 <= Range of values <= 10^6

Sample Input 1
5 --> Number of elements in array

2 4 5 8 9 --> Array elements

7 --> Target sum value

Sample Output 1
Present

Explanation 1
Since 0 and 2 are the indices where the numbers 2 and 5 which add up to 7 are seen
 */

/**
 * @param {number} n
 * @param {number[]} arr
 * @param {number} target_sum
 * @return {boolean}
 */
// interface TwoSumInSortedArrayPropsType {
//   n: number;
//   arr: number[];
//   target_sum: number;
// }
function twoSumInSortedArrayBrutForce( // TC - O(N2)
  n: number,
  arr: number[],
  target_sum: number
): boolean {
  for (let i = 0; i < n - 1; i++) {
    //TC - O(n)
    for (let j = i + 1; j < n; j++) {
      // TC - O(n)
      if (arr[i] + arr[j] === target_sum) {
        console.log(i, j);
        return true; // SC - O(1)
      }
    }
  }
  return false; // SC - O(1)
}
console.log(
  "twoSumInSortedArrayBrutForce",
  twoSumInSortedArrayBrutForce(5, [2, 4, 5, 8, 9], 7)
);

function twoSumInSortedArray(
  n: number,
  arr: number[],
  target_sum: number
): boolean {
  let left = 0,
    right = n - 1; // Space Complexity: O(2)
  while (left < right) {
    //TC- O(n)
    if (arr[left] + arr[right] === target_sum) {
      return true; // Space Complexity: O(1)
    } else if (arr[left] + arr[right] > target_sum) {
      right--;
    } else left++;
  }
  return false; // Space Complexity: O(1)
}

console.log("twoSumInSortedArray", twoSumInSortedArray(5, [2, 4, 5, 8, 9], 7));
