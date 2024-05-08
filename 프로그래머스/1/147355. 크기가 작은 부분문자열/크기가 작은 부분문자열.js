function solution(t, p) {
    var answer = 0;
    const pNum = parseInt(p);
    
    for(let i = 0; i <= t.length - p.length; i++){
        const sub = t.substring(i, i + p.length);
        const subNum = parseInt(sub)
        if(subNum <= pNum){
            answer++;
        }
    }
    return answer;
}