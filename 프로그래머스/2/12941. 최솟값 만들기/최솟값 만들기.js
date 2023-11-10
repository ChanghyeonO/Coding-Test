function solution(A,B){
    var answer = 0;
    let first = A.sort((a, b) => a - b);
    let second = B.sort((a, b)=> b - a);

    for(let i = 0; i < first.length; i++){
       answer += first[i] * second[i] 
    }
    return answer;
}