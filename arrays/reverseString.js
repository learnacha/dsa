// reverse a string

const text2Reverse = "hello, my wife name is sindhu";

/**
 * Convert str into reverseString
 * @param {string} str
 * @returns reversed string
 */

function reverseStringV1(str) {
  const strArr = str.split("");
  const reverseArr = [];

  for (let i = strArr.length - 1; i >= 0; i--) {
    reverseArr.push(strArr[i]);
  }

  return reverseArr.join("");
}

// console.log(reverseStringV1(text2Reverse));

function reverseStringV2(str) {
  return str.split("").reverse().join('');
}

console.log(reverseStringV2(text2Reverse));

function reverseStringV2(str) {
}
