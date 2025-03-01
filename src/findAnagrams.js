const findAnagrams = (str1, str2) => {
  const charCount = {};
  for (let char of str1)
    charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0) + 1;
  let j = 0;
  while (str2[j] && charCount[str2[j].toLowerCase()] && j < str2.length)
    charCount[str2[j++].toLowerCase()]--;
  return j === str2.length && str1.length === str2.length;
};

export default findAnagrams;
