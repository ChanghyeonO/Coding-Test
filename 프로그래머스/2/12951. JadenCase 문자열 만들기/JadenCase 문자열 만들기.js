function solution(s) {
    
    let answer = [];
    let a = s.split(" ")
    for(let i = 0; i < a.length; i++){
        answer.push(a[i].charAt(0).toUpperCase() + a[i].slice(1).toLowerCase())
    }
    
    return answer.join(' ');
}