const fishBash = require('./soal_1');

describe('fishBash', () => {
    let result = jest.spyOn(console, "log").mockImplementation();

    it("Contains word 'fish bash' in first 15 outputs", () => {
        fishBash(15);
        expect(result).toHaveBeenCalledWith('fish bash');
    });

    it("Contains word 'bash' in first 5 outputs", () => {
        fishBash(5);
        expect(result).toHaveBeenCalledWith('bash');
    });

    it("Contains word 'fish' in first 3 outputs", () => {
        fishBash(3);
        expect(result).toHaveBeenCalledWith('fish');
    });

    it("Contains itself when the numbers were not multiply of 3, 5, and 15", () => {
        const input = 1 || 2 || 4 || 7 || 8 || 11 || 13 || 14
        fishBash(input);
        expect(result).toHaveBeenCalledWith(input);
    });
})