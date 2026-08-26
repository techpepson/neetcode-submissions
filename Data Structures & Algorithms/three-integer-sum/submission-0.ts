class Solution {
  /**
   * @param {number[]} nums
   * @return {number[][]}
   */
  threeSum(nums: number[]): number[][] {
    const result: number[][] = [];
    const sorted = nums.sort((a, b) => a - b);

    for (let i = 0; i < sorted.length - 2; i++) {
      // Skip duplicate values for the first number to avoid duplicate triplets
      if (i > 0 && sorted[i] === sorted[i - 1]) continue;

      // Since array is sorted, if the smallest possible sum is already positive, stop
      if (sorted[i] > 0) break;

      let leftPointer = i + 1;
      let rightPointer = sorted.length - 1;

      while (leftPointer < rightPointer) {
        const sum = sorted[i] + sorted[leftPointer] + sorted[rightPointer];

        if (sum === 0) {
          result.push([sorted[i], sorted[leftPointer], sorted[rightPointer]]);

          // Skip duplicates for the second and third numbers
          while (leftPointer < rightPointer && sorted[leftPointer] === sorted[leftPointer + 1]) {
            leftPointer++;
          }
          while (leftPointer < rightPointer && sorted[rightPointer] === sorted[rightPointer - 1]) {
            rightPointer--;
          }

          leftPointer++;
          rightPointer--;
        } else if (sum < 0) {
          leftPointer++;
        } else {
          rightPointer--;
        }
      }
    }

    return result;
  }
}