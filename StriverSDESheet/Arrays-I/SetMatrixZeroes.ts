/**
 * Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.
 */
/**
 Do not return anything, modify matrix in-place instead.
 */

/**
 First I'll iterrate through the matrix;
 And When I'll find 0
 I'll iterrate the row/collumn and turn them to -1
 */
function setZeroesBruteForce(matrix: number[][]): void {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        for (let rowIndex = 0; rowIndex < matrix[i].length; rowIndex++) {
          if (matrix[i][rowIndex] !== 0) {
            matrix[i][rowIndex] = -10;
          }
        }
        for (let colIndex = 0; colIndex < matrix.length; colIndex++) {
          if (matrix[colIndex][j] !== 0) {
            matrix[colIndex][j] = -10;
          }
        }
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === -10) {
        matrix[i][j] = 0;
      }
    }
  }
}

/**
 *
 * @param matrix
 *
 * Have 2 sets, so that we can have note the unique location of row & collumn where we have 0.
 * Will iterate through the whole matrix, and fill the sets.
 * Will iterate through the whole matrix again, and based on the sets values will set the value of node to 0
 */
function setZeroesSets(matrix: number[][]): void {
  let row: Set<number> = new Set();
  let col: Set<number> = new Set();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 0) {
        row.add(i);
        col.add(j);
      }
    }
  }
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (row.has(i) || col.has(j)) {
        matrix[i][j] = 0;
      }
    }
  }
}
