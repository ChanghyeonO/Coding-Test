function solution(n) {
    var answer = 0;
    let str = n.toString();
    let arr = str.split('');
    
    arr.forEach((num)=>{
        answer += Number(num);
    })
    return answer;
}