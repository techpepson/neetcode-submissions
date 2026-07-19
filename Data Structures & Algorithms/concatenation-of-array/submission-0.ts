class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    /*
        Program rublics and implementation plan
        1. An integer array of length n is used
        2. Array ans is of length 2n, which is twice of array nums.
        3. ans[i] === nums[i] and ans[i + n] == nums[i]
        eg. nums = [1,2,3,4,5,6]; ans = []    
    */
    getConcatenation(nums: number[]): number[] {
        let ans: number[] = [];
        let startIndex = 0;

        for (let i =0; i < 2; i++){
            for (let i = 0; i < nums.length; i++){
            let num = nums[i];
            ans.push(num) 
        }
        }

        return ans;
    }
}

const solution = new Solution();
const result = solution.getConcatenation([1,4,1,2])
console.log(result)