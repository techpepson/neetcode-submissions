class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s: string, t: string): number {
        let spointer = 0;
        let tpointer = 0;
        let match = "";

        while (spointer < s.length && tpointer < t.length) {
            if (s[spointer] === t[tpointer]) {
                match += t[tpointer];
                tpointer++;
            }
            spointer++;
        }

        //return the length of characters required to make a sequence
        return t.length - match.length;
    }
}
