/**
 * Input: Accept 2 number arrays
 * Output: return the merged and sorted array
 */

const array1 = [1,3,5,7,9];
const array2 = [2,4,6,8];

const mergeSortArraysV1 = (arr1, arr2) => [...arr1, ...arr2].sort((a,b) => a-b);

console.log(mergeSortArraysV1(array1, array2));