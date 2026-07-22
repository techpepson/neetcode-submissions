class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        let indices: number[] = [];

        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];

            for (let j = i + 1; j < nums.length; j++) {
                let next = nums[j];
                if (current + next === target) {
                    indices.push(i);
                    indices.push(j);
                }
            }
        }

        return indices;
    }
}
