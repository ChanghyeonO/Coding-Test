function solution(s) {
    const numWords = {
        zero: '0', 
        one: '1', 
        two: '2', 
        three: '3', 
        four: '4',
        five: '5', 
        six: '6', 
        seven: '7', 
        eight: '8', 
        nine: '9'
    };

    let result = '';
    let temp = '';
    
    for (let char of s) {
        if (isNaN(char)) {
            temp += char;
            if (numWords[temp] !== undefined) {
                result += numWords[temp];
                temp = '';
            }
        } else {
            result += char;
        }
    }

    return parseInt(result);
}
