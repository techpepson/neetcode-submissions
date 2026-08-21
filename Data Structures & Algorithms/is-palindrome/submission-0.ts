class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        let left = 0;
        let right = s.length - 1;

        while (left < right) {
            const leftChar = s[left];
            const rightChar = s[right];

            if (!this.isAlphanumeric(leftChar)) {
                left++;
                continue;
            }
            if (!this.isAlphanumeric(rightChar)) {
                right--;
                continue;
            }

            if (leftChar.toLowerCase() !== rightChar.toLowerCase()) {
                return false;
            }

            left++;
            right--;
        }

        return true;
    }

    private isAlphanumeric(char: string): boolean {
        return /[a-zA-Z0-9]/.test(char);
    }
}
