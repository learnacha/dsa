function maxSubArraySum(a, size) {
  let max_so_far = a[0];
  let curr_max = a[0];

  for (let i = 1; i < size; i++) {
    curr_max = Math.max(a[i], curr_max + a[i]);
    max_so_far = Math.max(max_so_far, curr_max);
  }

  return max_so_far;
}

let a = [-2, -3, 4, -1, -2, 1, 5, -3];
let b = [5, 4, -1, 7, 8];

let n = b.length;
console.log("Maximum contiguous sum is ", maxSubArraySum(b, n));

const maxSubArraySumV2 = (intArr) => {
  let maxSoFar = intArr[0];
  let currMax = intArr[0];

  for (let index = 0; index < intArr.length; index++) {
    const element = intArr[index];

    currMax = Math.max(element, element + currMax);
    maxSoFar = Math.max(currMax, maxSoFar);
  }

  return maxSoFar;
};

console.log("Maximum contiguous sum is ", maxSubArraySumV2(b));
