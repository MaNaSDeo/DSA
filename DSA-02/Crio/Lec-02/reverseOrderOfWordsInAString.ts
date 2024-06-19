// Reverse Order of Words in a String

/**
 * Problem Description
A word is defined as a sequence of non-space characters. The words in s will be separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between two words.

The returned string should only have a single space separating the words.

Do not include any extra spaces.

Input format
String s.

Output format
The function should return a string of the words in reverse order concatenated by a single space.

Sample Input 1
hello world

Sample Output 1
world hello

Explanation
The given words after being reversed gives:world hello

Your reversed string should not contain leading or trailing spaces.

Constraints
1 <= s.length <= 10^5

s contains English letters (upper-case and lower-case), digits, and spaces ' '.

There is at least one word in s.
 */

const reverseOrderOfWordsInAString = (str: string): string => {
  const strArray = str.split(" "); //TC - O(n)
  let resutlStr = "";
  for (let i = strArray.length - 1; i >= 0; i--) {
    //TC - O(n)
    if (i === strArray.length - 1) resutlStr += strArray[i];
    else resutlStr += " " + strArray[i];
  }
  return resutlStr;
};

const str001 = "hello world";

console.log(
  "reverseOrderOfWordsInAString",
  reverseOrderOfWordsInAString(str001)
);
