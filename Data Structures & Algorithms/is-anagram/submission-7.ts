class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     * It is important to note that Anagrams depend on the rule of duplicates, since we have to
     * make sure that the two strings repeat the same exact characters.
     * This means that when we create a set of the first string, the lenght should be the same as the size of the
     * set of the other.
     */
    isAnagram(s: string, t: string): boolean {
        let returnValue = false;
        if (s.length == t.length) {
            for (let letter of s) {
                if (!t.toLowerCase().includes(letter.toLowerCase())) {
                    return false;
                } else {
                    t = t.replace(letter, "");
                    returnValue = true;
                }
            }
        } else {
            returnValue = false;
        }
        return returnValue;
    }
}

const solution = new Solution();
const result = solution.isAnagram("racecar", "carrace");
console.log(result);