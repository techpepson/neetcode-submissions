class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;
        const sortedArray = numbers.sort((a, b) => a - b);

        while (leftPointer < rightPointer) {
            const sum = sortedArray[rightPointer] + sortedArray[leftPointer];

            if (sum === target) {
                return [leftPointer + 1, rightPointer + 1];
            } else if (sum < target) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }
        return [];
    }
}
