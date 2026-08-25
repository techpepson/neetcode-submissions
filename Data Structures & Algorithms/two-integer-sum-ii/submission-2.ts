class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers: number[], target: number): number[] {
        let leftPointer = 0;
        let rightPointer = numbers.length - 1;
        const sortedNumbers = [...numbers].sort((a, b) => a - b);

        while (leftPointer < rightPointer) {
            let currentNumber = sortedNumbers[leftPointer];
            let nextNumber = sortedNumbers[rightPointer];
            const sum = currentNumber + nextNumber;

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
