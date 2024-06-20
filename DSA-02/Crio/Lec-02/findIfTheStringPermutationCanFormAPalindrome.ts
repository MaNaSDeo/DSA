// Find if the string permutation can form a palindrome

/**
 * Problem Description
Given a string S which consists of both lowercase and uppercase alphabetical letters, you have to write a function to check if string S is a permutation of a palindrome or not. Note: Characters are case sensitive i.e. ‘a’ is not the same as ‘A’.

Input format
First line contains an integer representing the value of T, the number of test cases.

In next T lines each line contains the string S.

Output format
For each test case, print "True"(without quotes) if it is a permutation of a palindrome and "False" otherwise.

Constraints
1 <= T <= 10

1 <= length(S) <= 100000

Sample Input 1
3

nnaamm

hello

Aab

Sample Output 1
True

False

False

Explanation 1
nnaamm is a permutation of namman, which is a palindrome

hello is not a permutation of any palindrome

Aab is not a permutation of any palindrome
 */
const findIfTheStringPermutationCanFormAPalindrome = (str: string): boolean => {
  let newMap = new Map();
  for (let i = 0; i < str.length; i++) {
    //TC- O(n) SC- O(n)
    newMap.set(str[i], (newMap.get(str[i]) || 0) + 1);
  }
  let oddCount = 0;
  newMap.forEach((key) => (key % 2 !== 0 ? oddCount++ : oddCount)); //TC- O(n) SC-O(n)

  if (oddCount <= 1) return true;
  return false;
};
console.log(findIfTheStringPermutationCanFormAPalindrome("manasnms"));
