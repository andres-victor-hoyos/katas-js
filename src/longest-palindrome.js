const isPalindrome = (s, start, len) => {
  for (let i = 0; i < len / 2; i++) {
    if (s[start + i] !== s[start + len - i - 1]) {
      return false;
    }
  }
  return true;
};

const findLongestPalindrome = (s, palindromelen) => {
  for (let d = 0; d <= s.length - palindromelen; d++) {
    if (isPalindrome(s, d, palindromelen)) {
      return s.slice(d, d + palindromelen);
    }
  }
  return null;
};

const longestPalindrome = (s) => {
  if (s.length === 0) return '';
  for (let palindromelen = s.length; palindromelen > 0; palindromelen--) {
    const result = findLongestPalindrome(s, palindromelen);
    if (result) return result;
  }
  return '';
};

export default longestPalindrome;