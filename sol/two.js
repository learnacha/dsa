// 2. Given an array of sorted integers, return boolean if the sum of any 2 numbers is 8

/**
 * Input: 1 array
 * Output: Boolean
 * Problem Statement: if any 2 of the array values sum is 2
 */

/**
 * Brute force way
 * 1. Iterate the array 1 time
 * 2. Iterate the same arrays 2nd time as nested
 * 3. Check if the sum of 1st and 2nd array item is 8, return true
 * 4. If loop existed, then return false
 * its O(n^2) way
 */

/**
 * Assumptions, always numbers and sorted
 */

const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];

const checkIfSumExistsV1 = (arr, checkVal) => {
  let sumExists = false;

  arr.forEach((item) => {
    arr.forEach((item2) => {
      if (item + item2 === checkVal) sumExists = true;
    });
  });

  return sumExists;
};

// console.log(checkIfSumExistsV1(array2, 8));

/**
 * Since the numbers are sorted,
 * 1. loop the array
 * 2. sum the first element and last element and verify
 * 3. if the value is more than the sum element, in the next iteration verify with last - 1 val
 * 4. if the value is less than the sum element, in the next iteration verify with begining val + 1 val
 * O(n/2) => O(n)
 */

const checkIfSumExistsV2 = (arr, checkVal) => {
  let sumExists = false;
  let indexPos = undefined;
  let startingIndex;
  let endingIndex;

  for (let i = 0; i < arr.length - 1; i++) {
    if (i === 0) {
      startingIndex = i;
      endingIndex = arr.length - 1;
    } else if (indexPos === "begin") {
      startingIndex = i;
    } else {
      endingIndex = arr.length - 1 - i;
    }

    let summation = arr[startingIndex] + arr[endingIndex];

    if (summation === checkVal) {
      sumExists = true;
      return sumExists;
    } else if (summation > checkVal) {
      indexPos = "end";
    } else {
      indexPos = "begin";
    }
  }

  return sumExists;
};

// console.log(checkIfSumExistsV2(array1, 8));

const checkIfSumExistsV3 = (arr, checkVal) => {
  let sumExists = false;
  let startingIndex = 0;
  let endingIndex = arr.length - 1;

  while (startingIndex < endingIndex) {
    let summation = arr[startingIndex] + arr[endingIndex];

    if (summation === checkVal) {
      sumExists = true;
      break;
    } else if (summation > checkVal) {
      --endingIndex;
    } else {
      ++startingIndex;
    }
  }

  return sumExists;
};

console.log(checkIfSumExistsV3(array1, 8));
