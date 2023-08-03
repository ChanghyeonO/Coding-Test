function solution(a, b) {
    var answer = 0;
   let first = a > b ? b : a;
   let second = a > b ? a : b;

    for(let i = first; i <= second; i++ ){
        answer += i;
    }
    return answer;
}