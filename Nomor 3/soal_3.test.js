const reverseString = require('./soal_3')

describe('Palindrom Function', () => {
    it('returns true if it is palindrom', () => {
        const input = 'atta'
        const expectedOutput = true

        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    })

    it('returns false if it is not palindrom', () => {
        const input = 'halilintar'
        const expectedOutput = false

        const result = reverseString(input);
        expect(result).toBe(expectedOutput);
    })
})