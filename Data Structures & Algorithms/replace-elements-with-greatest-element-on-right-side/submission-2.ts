class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr: number[]): number[] {
        let greatest = -1;

        for (let i = arr.length - 1; i >= 0; i--) {
            const current = arr[i];
            arr[i] = greatest;
            greatest = Math.max(current, greatest);
        }

        return arr;
    }
}
