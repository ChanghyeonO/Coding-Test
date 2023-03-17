function solution(numbers) {
    var answer = 0;
    let arr = numbers.sort((a, b) => {
        return a - b;
    });
    let lastNum = arr[arr.length - 1];
    let anotherNum = arr[arr.length - 2];
    
    answer = lastNum * anotherNum
    return answer;
}