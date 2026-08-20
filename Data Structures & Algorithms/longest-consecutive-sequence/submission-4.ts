class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
        let res = 0;
        let numSet = new Set(nums);

        for (let num of nums) {
            if (!numSet.has(num - 1)) {
                let currentStreak = 1;
                let currentNum = num;
                while (numSet.has(currentNum + 1)) {
                    currentStreak++;
                    currentNum++;
                }
                res = Math.max(res, currentStreak);
            }
        }
        return res;
    }
}
