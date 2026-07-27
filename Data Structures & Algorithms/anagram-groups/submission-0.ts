class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const result = new Map<string, string[]>();

        for (const word of strs) {
            const sortedWord = word.split("").sort().join("");

            if (!result.has(sortedWord)) {
                result.set(sortedWord, []);
            }
            result.get(sortedWord).push(word);
        }

        return Array.from(result.values());
    }
}
