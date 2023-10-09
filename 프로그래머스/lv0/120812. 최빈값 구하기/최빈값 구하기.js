function solution(array) {
    const frequency = {}; 
    let maxFrequency = 0; 

    for (let num of array) {
        if (!frequency[num]) {
            frequency[num] = 0;
        }
        frequency[num]++;
        maxFrequency = Math.max(maxFrequency, frequency[num]);
    }

    const modes = [];
    for (let num in frequency) {
        if (frequency[num] === maxFrequency) {
            modes.push(Number(num));
        }
    }

    if (modes.length > 1) {
        return -1;
    }

    return modes[0];
}
