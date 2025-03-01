import "../src/longest-palindrome";

test('finds the longest palindrome in a string', () => {
    expect(longestPalindrome('')).toBe('');
    expect(longestPalindrome('a')).toBe('a');
    expect(longestPalindrome('ac')).toBe('a'); 
    expect(longestPalindrome('aa')).toBe('aa');
    expect(longestPalindrome('aba')).toBe('aba');
    expect(longestPalindrome('abc')).toBe('a');
    expect(longestPalindrome('abcba')).toBe('abcba');
    expect(longestPalindrome('axyza')).toBe('a');
    expect(longestPalindrome('axyxa')).toBe('axyxa');
    expect(longestPalindrome('abba')).toBe('abba');
    expect(longestPalindrome('babad')).toBe('bab'); 
    expect(longestPalindrome('cbbd')).toBe('bb');    
    expect(longestPalindrome('racecar')).toBe('racecar');
    expect(longestPalindrome('abccba')).toBe('abccba');
    expect(longestPalindrome('abcd')).toBe('a');
});