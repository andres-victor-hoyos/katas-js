export default mostFrequentNumber = (arr) => {
    if (arr.length === 0) return undefined;

    const frequencyMap = new Map();
    let maxFrequency = 0;
    let mostFrequent = arr[0];

    arr.forEach(num => {
        const frequency = (frequencyMap.get(num) || 0) + 1;
        frequencyMap.set(num, frequency);

        if (frequency > maxFrequency || (frequency === maxFrequency && arr.indexOf(num) < arr.indexOf(mostFrequent))) {
            maxFrequency = frequency;
            mostFrequent = num;
        }
    });

    return mostFrequent;
};
