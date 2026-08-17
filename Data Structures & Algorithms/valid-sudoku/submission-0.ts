class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
        // One Set per row, per column, per 3x3 box
        const rows: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const cols: Set<string>[] = Array.from({ length: 9 }, () => new Set());
        const boxes: Set<string>[] = Array.from({ length: 9 }, () => new Set());

        for (let r = 0; r < 9; r++) {
            for (let c = 0; c < 9; c++) {
                const val = board[r][c];

                // Skip empty cells
                if (val === ".") continue;

                const boxIndex = Math.floor(r / 3) * 3 + Math.floor(c / 3);

                // Check for duplicates in row, column, or box
                if (rows[r].has(val) || cols[c].has(val) || boxes[boxIndex].has(val)) {
                    return false;
                }

                // Mark this value as seen
                rows[r].add(val);
                cols[c].add(val);
                boxes[boxIndex].add(val);
            }
        }

        return true;
    }
}
