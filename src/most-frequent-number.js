export default mostFrequentNumber = (arr) => {
  if (arr.length === 0) return undefined;
  const frequency = [];
  let frequenceTotal = 0;
  let item = 0;
  for (let i = 0; i < arr.length; i++) {
    let currentIndex = arr[i];
    frequency[currentIndex] = (frequency[currentIndex] || 0) + 1;
    if (frequency[currentIndex] > frequenceTotal) {
      frequenceTotal = frequency[currentIndex];
      item = currentIndex;
    }
  }
  return item;
};
