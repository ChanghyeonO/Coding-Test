function solution(intStrs, k, s, l) {
    var answer = [];
    for(let i = 0; i < intStrs.length; i++){
        let arr = intStrs[i].slice(s, s + l)
        if(arr > k){
            answer.push(Number(arr))
        }
    }
    return answer;
}