function arraySquare(arr1: Array<number>, arr2: Array<number>): boolean {
  //If every number in arr1 have a crossponding squared number in arr2, then both should have equal length.
  if (arr1.length !== arr2.length) return false;

  const map1 = new Map();
  for (let i = 0; i < arr1.length; i++) {
    if (map1.has(arr1[i])) {
      map1.set(arr1[i], map1.get(arr1[i]) + 1);
    } else {
      map1.set(arr1[i], 1);
    }
  }
  for (let j = 0; j < arr2.length; j++) {
    if (map1.has(Math.sqrt(arr2[j]))) {
      map1.set(Math.sqrt(arr2[j]), map1.get(Math.sqrt(arr2[j]) - 1));
    } else {
      return false;
    }
    if (map1.get(Math.sqrt(arr2[j])) === 0) map1.delete(Math.sqrt(arr2[j]));
  }
  return true;
}

const array1 = [1, 2, 4, 3];
const array2 = [1, 4, 9, 16];

const result = arraySquare(array1, array2);

console.log(result);
