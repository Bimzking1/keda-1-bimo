const exportedFunctions = require('./soal_2')

describe('Sorting Ascending', () => {
    it('prints same result as the expected', () => {
        const input = [5, 3, 2, 1, 4, 6, 7];
        const expectedOutput = [1, 2, 3, 4, 5, 6, 7]

        const result = exportedFunctions.sortAscending(input);
        expect(result).toEqual(expectedOutput);
    })
})

describe('Sorting Descending', () => {
    it('prints same result as the expected', () => {
        const input = [5, 3, 2, 1, 4, 6, 7];
        const expectedOutput = [7, 6, 5, 4, 3, 2, 1]

        const result = exportedFunctions.sortDescending(input);
        expect(result).toEqual(expectedOutput);
    })
})