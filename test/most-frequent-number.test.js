import '../src/most-frequent-number.js';
describe('mostFrequentNumber', () => {
    test('should return the most frequent number in an array of integers', () => {
        expect(mostFrequentNumber([1, 2, 3, 1, 2, 1])).toBe(1);
    });

    test('should return the first most frequent number in case of a tie', () => {
        expect(mostFrequentNumber([1, 2, 2, 3, 3])).toBe(2);
    });

    test('should return the number itself if the array contains only one number', () => {
        expect(mostFrequentNumber([5])).toBe(5);
    });

    test('should return the most frequent number when negative numbers are included', () => {
        expect(mostFrequentNumber([-1, -1, 2, 2, -1])).toBe(-1);
    });

    test('should return the most frequent number when the array contains zeros', () => {
        expect(mostFrequentNumber([0, 0, 1, 1, 0])).toBe(0);
    });

    test('should return undefined for an empty array', () => {
        expect(mostFrequentNumber([])).toBeUndefined();
    });
});

