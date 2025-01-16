import '../src/anagrams';

describe('findAnagrams', () => {
    test('should return true for anagrams', () => {
        expect(findAnagrams('listen', 'silent')).toBe(true);
        expect(findAnagrams('evil', 'vile')).toBe(true);
        expect(findAnagrams('restful', 'fluster')).toBe(true);
    });

    test('should return false for non-anagrams', () => {
        expect(findAnagrams('hello', 'world')).toBe(false);
        expect(findAnagrams('test', 'tseting')).toBe(false);
        expect(findAnagrams('anagram', 'nagaramm')).toBe(false);
    });

    test('should return false for strings of different lengths', () => {
        expect(findAnagrams('abc', 'abcd')).toBe(false);
        expect(findAnagrams('a', 'aa')).toBe(false);
    });

    test('should handle empty strings', () => {
        expect(findAnagrams('', '')).toBe(true);
        expect(findAnagrams('a', '')).toBe(false);
        expect(findAnagrams('', 'a')).toBe(false);
    });

    test('should handle case sensitivity', () => {
        expect(findAnagrams('Listen', 'Silent')).toBe(true);
        expect(findAnagrams('Evil', 'Vile')).toBe(true);
    });
});