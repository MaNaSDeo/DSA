// Merge Two Sorted Arrays

/**
 * Problem Description
Given two sorted arrays of size M and N, merge the two arrays and return the final array, sorted.

Input format
A single Integer M, that contains the number of elements in the first array.

A single Integer N, that contains the number of elements in the second array.

Next Line contains M space Integers of the array nums1.

Next Line contains N space Integers of the array nums2.

Output format
Print the array after merging.

Sample Input 1
3

3

1 2 3

2 5 6

Sample Output 1
1 2 2 3 5 6

Explanation 1
The sorted array is returned after merging.

Constraints
1 <= N,M <= 10^5

|nums1[i] | <= 10^9

|nums2[i] | <= 10^9
 */

/**
 * @param {number} m
 * @param {number[]} nums1
 * @param {number} n
 * @param {number[]} nums2
 * @return {number[]}
 */
function mergeSortedArray(
  m: number,
  nums1: number[], //[1,3,5,7]
  n: number,
  nums2: number[] //[2,4,6,8,10,12]
): number[] {
  let first = 0,
    second = 0,
    resultArr = []; // SC- O(3)
  while (first < m || second < n) {
    //TC - O(m+n), SC - O(m+n)
    if (!nums1[first] && nums2[second]) {
      resultArr.push(nums2[second]);
      second++;
    }
    if (!nums2[second] && nums1[first]) {
      resultArr.push(nums1[first]);
      first++;
    }
    if (nums1[first] && nums2[second] && nums1[first] <= nums2[second]) {
      resultArr.push(nums1[first]);
      first++;
    } else if (nums1[first] && nums2[second] && nums1[first] > nums2[second]) {
      resultArr.push(nums2[second]);
      second++;
    }
  }
  return resultArr;
}

console.log("mergeSortedArray", mergeSortedArray(3, [1, 2, 3], 3, [2, 5, 6]));
