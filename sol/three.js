// 3. Given an array of non-sorted integers, return boolean if the sum of any 2 numbers is 8

/**
 * Input: 1 array
 * Output: Boolean
 * Problem Statement: if any 2 of the array values sum is 2
 */

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];

const checkIfSumExistsV1 = (arr, checkVal) => {
  const complementSet = new Set();
  let hasSumExist = false;

  for (let index = 0; index < arr.length; index++) {
    const element = arr[index];

    if (complementSet.has(element)) {
      hasSumExist = true;
      break;
    }

    complementSet.add(checkVal - element);
  }
  return hasSumExist;
};

console.log(checkIfSumExistsV1(array2, 8));
