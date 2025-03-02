const countCharacters = (str) => {
  const charCount = {};
  for (const char of str) {
    charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0) + 1;
  }
  return charCount;
};

const isAnagram = (charCount, str2) => {
  let j = 0;
  while (str2[j] && charCount[str2[j].toLowerCase()] && j < str2.length) {
    charCount[str2[j++].toLowerCase()]--;
  }
  return j === str2.length;
};

const findAnagrams = (str1, str2) => {
  if (str1.length !== str2.length) return false;
  const charCount = countCharacters(str1);
  return isAnagram(charCount, str2);
};

export default findAnagrams;
