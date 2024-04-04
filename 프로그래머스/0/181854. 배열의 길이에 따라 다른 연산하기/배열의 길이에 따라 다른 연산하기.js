function solution(arr, n) {
    const isLengthOdd = arr.length % 2 !== 0;
    
    const answer = arr.map((value, index) => {
        if ((isLengthOdd && index % 2 === 0) || (!isLengthOdd && index % 2 !== 0)) {
            return value + n;
        }
        return value;
    });
    
    return answer;
}
