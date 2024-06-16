/**
 * Problem Description
Given an integer A, generate a square matrix filled with elements from 1 to A*A in spiral order. 
The spiral order will be clockwise in nature starting from (0,0)

Input format
One line of input, containing a single integer A.

Output format
Print a 2-d matrix of size A x A satisfying the spiral order.

Sample Input 1
3

Sample Output 1
1 2 3

8 9 4

7 6 5

Explanation
As you can see the matrix goes spirally with each next position incremented by one.

Constraints
1<=A<=1000
 */

/**
 [
  [ 00, 01, 02, 03 ], // 0
  [ 10, 11, 12, 13 ], // 1
  [ 20, 21, 22, 23 ], // 2
  [ 30, 31, 32, 33 ]  // 3
]
 */
function printMatrixInSpiralOrder(num: number): number[][] {
  //   const resultArray = Array(num).fill(Array(num).fill(null));
  const resultArray = Array.from({ length: num }, () => Array(num).fill(null));
  let leftTop = 0,
    rightTop = num - 1, // 4 - 1 = 3
    rightBottom = num - 1, // 4 - 1 = 3
    leftBottom = 0,
    count = 0;

  while (count < num * num) {
    // Left -> Right (Top)
    for (let i = leftTop; i <= rightTop; i++) {
      // i = 0; i <= 3; i++
      resultArray[leftTop][i] = count;
      count++;
    }
    leftTop++;

    // Top -> Bottom (Right)
    for (let i = leftTop; i <= rightBottom; i++) {
      // i = 1; i <= 3; i++
      resultArray[i][rightTop] = count;
      count++;
    }
    rightTop--;

    // Rigth -> Left (Bottom)
    for (let i = rightTop; i >= leftBottom; i--) {
      resultArray[rightBottom][i] = count;
      count++;
    }
    rightBottom--;

    // Bottom -> Top (Left)
    for (let i = rightBottom; i >= leftTop; i--) {
      resultArray[i][leftBottom] = count;
      count++;
    }
    leftBottom++;
  }
  return resultArray;
}

const resultDSA02Lec01P01 = printMatrixInSpiralOrder(5);

console.log("result", resultDSA02Lec01P01);
