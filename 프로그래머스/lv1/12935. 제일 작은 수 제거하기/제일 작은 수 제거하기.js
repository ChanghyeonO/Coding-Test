function solution(arr) {
var answer = [];
    
    const min = Math.min(...arr);
    answer = arr.filter(item => item !== min);

    return answer.length ? answer : [-1];
}