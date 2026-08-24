class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        const stripped = s
            .split(" ")
            .join("")
            .toLowerCase()
            .replace(/[^a-z0-9]/g, "");

        let leftPointer = 0;
        let rightPointer = stripped.length - 1;

        while (leftPointer < rightPointer) {
            let left = stripped[leftPointer];
            let right = stripped[rightPointer];

            if (left !== right) {
                return false;
            }

            leftPointer++;
            rightPointer--;
        }

        return true;
    }
}
