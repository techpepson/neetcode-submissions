class Solution {
  productExceptSelf(nums: number[]): number[] {
    const n = nums.length;
    const result: number[] = new Array(n).fill(1);

    // Pass 1: fill result[i] with product of everything BEFORE i
    let prefix = 1;
    for (let i = 0; i < n; i++) {
      result[i] = prefix;
      prefix *= nums[i];
    }

    // Pass 2: multiply in the product of everything AFTER i
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
      result[i] *= suffix;
      suffix *= nums[i];
    }

    return result;
  }
}