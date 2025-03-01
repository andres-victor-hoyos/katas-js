import maxSubarraySum from "../src/maximun-subarray-sum";
describe("", () => {
  test("maximun-subarray-sum", () => {
    expect(maxSubarraySum([])).toBe(0);
    expect(maxSubarraySum([1])).toBe(1);
    expect(maxSubarraySum([-1, -2, 3])).toBe(3);
    expect(maxSubarraySum([1, -2, -3])).toBe(1);
    expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).toBe(6);
    expect(maxSubarraySum([-2, -1, -3, -4, -1, -2, -1, -5, -4])).toBe(-1);
    expect(maxSubarraySum([-2, 1, -3, 4, -1, 2, 1, -5, 4, 10])).toBe(15);
    expect(maxSubarraySum([-9,-1,7,-2,5,-20])).toBe(10);
  });
});


