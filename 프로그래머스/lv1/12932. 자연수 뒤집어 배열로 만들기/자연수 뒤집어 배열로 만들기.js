function solution(n) {
    let answer = [];
    const ToStringArr = n.toString().split('');
    for(let i = ToStringArr.length - 1; i >= 0; i--){
        answer.push(Number(ToStringArr[i]))
    }
    return answer;
}