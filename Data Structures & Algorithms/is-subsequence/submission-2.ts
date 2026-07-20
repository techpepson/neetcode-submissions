class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s: string, t: string): boolean {
        let spointer = 0;
        let tpointer = 0;
        let match = "";

        while (spointer < s.length && tpointer < t.length) {
            if (s[spointer] === t[tpointer]){
                match += t[tpointer]
                spointer++
            }
            //always increase the pointer for string t
            tpointer++
        }

        if (match === s) {
            return true;
        } else {
            return false;
        }
    }
}
