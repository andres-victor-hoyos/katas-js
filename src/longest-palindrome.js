export default longestPalindrome = (s) => {
  if (s.length===0) return "";
  for (let palindromelen = s.length; palindromelen > 0; palindromelen--) {
    for(let d=0; d<=s.length-palindromelen; d++) {
      let i = 0;
      while (i < palindromelen && s[d+i] === s[d+palindromelen - i - 1]) 
        i++;
      if (i === palindromelen) 
        return s.slice(d, d+palindromelen); 
    }
  }    
};
