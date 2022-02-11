/**
 *
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */

/**
 * Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
Example 3:

Input: nums = [3,3], target = 6
Output: [0,1]
 */

/**
 * 1. Loop through each number of the array
 * 2. Create a complement set, containing the complement value as key, index as value
 * 3. Check if value is available in the complement as key
 * 4. If exists, return the values' index and complete key index
 * 5. If not, add the complement to the set with key and index
 * 6. If loop exited, return null
 */
const array1 = [1, 2, 3, 9];
const array2 = [1, 2, 4, 4];
const targetVal1 = 8;

const array3 = [2, 7, 11, 15];
const targetVal2 = 9;

const array4 = [3, 2, 4];
const targetVal3 = 6;

const getIndexOfSum = (intArr, sum) => {
  const complementMap = new Map();
  let searchInProgress = true;
  let arrIndex = 0;
  const keys = [];

  while (searchInProgress) {
    const element = intArr[arrIndex];

    if (complementMap.has(element)) {
      keys.push(arrIndex);
      keys.push(complementMap.get(element));
      searchInProgress = false;
    }

    if (arrIndex === intArr.length - 1) {
      searchInProgress = false;
    }

    complementMap.set(sum - element, arrIndex);
    arrIndex++;
  }

  return keys;
};

console.log(getIndexOfSum(array4, targetVal3));
