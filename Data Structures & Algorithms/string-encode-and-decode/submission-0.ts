class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let separator = "#";
        let out = "";

        for (let str of strs) {
            out += `${str.length}${separator}${str}`;
        }
        return out;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(s: string): string[] {
        const result: string[] = [];
        let i = 0;

        while (i < s.length) {
            let j = i;
            while (s[j] !== "#") {
                j++;
            }

            const length = parseInt(s.slice(i, j), 10);

            const start = j + 1;
            const end = start + length;
            result.push(s.slice(start, end));

            i = end;
        }

        return result;
    }
}
