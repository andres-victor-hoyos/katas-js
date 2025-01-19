export default maxSubarraySum = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0];
  let curr = -Infinity;
  let ans = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    curr = Math.max(arr[i], curr + arr[i]);
    ans = Math.max(ans, curr);
  }
  return ans;
};
