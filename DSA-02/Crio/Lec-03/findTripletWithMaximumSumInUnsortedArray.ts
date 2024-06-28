// Find Triplet with Maximum Sum in Unsorted Array [Pattern Introduction]

/**
 * Problem Description
Given an array nums, you need to find the maximum sum of triplet (nums[i] + nums[j] + nums[k]) such that 0 <= i < j < k and nums[i] < nums[j] < nums[k]. If no such triplet exists print 0.

Input format
There are 2t+1 lines of input

First line contains an integer t - No of test cases.

First line of each test case contains an integer n - No of elements in the array.

Second line of each test case contains N space separated integers - The array nums.

Output format
For each test case print the answer in a new line.

Sample Input 1
3

7

3 7 4 2 5 7 5

4

5 2 4 5

3

3 2 1

Sample Output 1
16

11

0

Explanation 1
In the first case valid triplets are: [3,4,5], [3,4,7], [4,5,7], [2,5,7]. Out of these [4,5,7] has the maximum sum, 16.

In the second case, it’s [2, 4, 5] with sum 11.

In the third case there are no valid triplets.

Constraints
1 <= t <= 100

3 <= n <= 300

1 <= nums[i] <= 10^9

It is guaranteed that the sum of n over all test cases is less than 3000.
 */

/**
 * @param {number} n
 * @param {number[]} nums
 * @return {number}
 */
/*
function maxSumTriplet(n: number, nums: number[]): number {
  // [3 ,7, 4, 2, 5, 7 ,5]
  let maxSum = 0;
  for (let i = 0; i < n - 2; i++) {
    let first = i, // first = 2
      second = i + 1, // second = 5
      third = i + 2; // third = 7

    while (third < n) {
      // console.log([
      //   "Before If",
      //   maxSum,
      //   first,
      //   nums[first],
      //   second,
      //   nums[second],
      //   third,
      //   nums[third],
      // ]);

      if (nums[first] < nums[second] && nums[second] < nums[third]) {
        if (maxSum < nums[first] + nums[second] + nums[third]) {
          maxSum = nums[first] + nums[second] + nums[third]; // maxSum = 16
          second++;
          // third++;
        }
      } else if (nums[second] <= nums[first]) {
        second++;
        // third++;
      } else if (nums[third] <= nums[second]) {
        third++;
      }
    }
  }
  return maxSum;
}
console.log([3, 7, 4, 2, 5, 7, 5].length);
console.log("maxSumTriplet", maxSumTriplet(7, [3, 7, 4, 2, 5, 7, 5]));
*/
function maxSumTripletBruteForce(n: number, nums: number[]): number {
  // TC - O(n3), SC - O(1)
  let maxSum = 0;
  for (let i = 0; i < n - 2; i++) {
    for (let j = 0; j < n - 1; j++) {
      for (let k = 0; k < n; k++) {
        if (
          nums[i] < nums[j] &&
          nums[j] < nums[k] &&
          maxSum < nums[i] + nums[j] + nums[k]
        ) {
          maxSum = nums[i] + nums[j] + nums[k];
        }
      }
    }
  }
  return maxSum;
}

console.log(
  "maxSumTripletBruteForce",
  maxSumTripletBruteForce(7, [3, 7, 4, 2, 5, 7, 5])
);

function maxSumTriplet(n: number, nums: number[]): number {
  let maxSum = 0;
  for (let i = 1; i < n - 1; i++) {
    let left = 0,
      right = i + 1,
      leftNum = -Infinity,
      rightNum = nums[i];
    while (left < i) {
      if (nums[left] < nums[i] && nums[left] > leftNum) {
        leftNum = nums[left];
      }
      left++;
    }
    while (right < n) {
      if (nums[right] > nums[i] && nums[right] > rightNum) {
        rightNum = nums[right];
      }
      right++;
    }
    if (
      leftNum < nums[i] &&
      nums[i] < rightNum &&
      maxSum < leftNum + nums[i] + rightNum
    )
      maxSum = leftNum + nums[i] + rightNum;
  }
  return maxSum;
}
console.log("maxSumTriplet", maxSumTriplet(7, [3, 7, 4, 2, 5, 7, 5]));
