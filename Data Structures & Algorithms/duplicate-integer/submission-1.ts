class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let returnBool = false;
        for (let i = 0; i < nums.length; i++) {
            const currentNum = nums[i];
            for (let j = i+1; j < nums.length; j++) {
                const innerNum = nums[j];
                if (currentNum == innerNum) {
                    returnBool = true;
                }
            }
        }

        return returnBool;
    }
}

const solution = new Solution();
const result = solution.hasDuplicate([1, 2, 3, 4]);
console.log(result);
