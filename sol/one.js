// 1. Given 2 arrays, create a function that lets a user know (true/false) whether these two arrays contain any common items

/**
 * Understanding/Assumptions
 * Input: 2 arrays, not empty or null and is of type literals
 * Output: Boolean
 */

/**
 * Brute force way
 *
 * 1. Iterate the first array
 * 2. Iterate the second array as nested
 * 3. return true if found
 * 4. return false after completing the loop -- since match found
 * O(n^2) -- its complex
 */

const array1 = ["a", "b", "c", "d"];
const array2 = ["s", "x", "y", "d"];

const checkItemExistsV1 = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) return true;
    }
  }

  return false;
};

// console.log(checkItemExistsV1(array1, array2));
// console.log(checkItemExistsV1(array1, null));
// console.log(checkItemExistsV1(null, array2));

//
/**
 * 1. Convert an array as object
 * 2. loop the 2nd array and verify with object
 * O(2n) => O(n)
 */

const checkItemExistsV2 = (arr1, arr2) => {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;

  const obj1 = {};
  let isItemExist = false;

  arr1.forEach((item) => (obj1[item] = true));

  arr2.forEach((item2) => {
    if (obj1[item2]) {
      isItemExist = true;
    }
  });

  return isItemExist;
};

// console.log(checkItemExistsV2(array1, array2));
// console.log(checkItemExistsV2(array1, null));
// console.log(checkItemExistsV2(null, array2));


/**
 * JavaScript ES6 way, using some and includes
 */


 const checkItemExistsV3 = (arr1, arr2) => {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  
    return arr1.some(item1 => arr2.includes(item1));
  };
  
  // console.log(checkItemExistsV3(array1, array2));
  // console.log(checkItemExistsV3(array1, null));
  // console.log(checkItemExistsV3(null, array2));