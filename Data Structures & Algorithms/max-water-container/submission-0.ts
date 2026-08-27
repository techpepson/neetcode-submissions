class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights: number[]): number {
        let leftPointer = 0;
        let rightPointer = heights.length - 1;
        let maxWater = 0;

        while (leftPointer < rightPointer) {
            const width = rightPointer - leftPointer;
            const height = Math.min(heights[leftPointer], heights[rightPointer]);
            const area = width * height;

            maxWater = Math.max(maxWater, area);

            // Move the pointer at the shorter line — moving the taller one
            // can only decrease width without ever increasing height (since
            // height is bounded by the min), so it can never improve area.
            if (heights[leftPointer] < heights[rightPointer]) {
                leftPointer++;
            } else {
                rightPointer--;
            }
        }

        return maxWater;
    }
}
