export default findAnagrams = (str1, str2) => {
    if (str1.length !== str2.length) {
        return false;
    }

    const charCount = {};

    for (let char of str1) {
        charCount[char.toLowerCase()] = (charCount[char.toLowerCase()] || 0) + 1;
    }

    for (let char of str2) {
        if (!charCount[char.toLowerCase()]) {
            return false;
        }
    }

    return true;
}
