function solution(s) {
    var answer = [];
    const a = s.split(' ').map(Number).sort((a, b) => a - b);
    
    const b = a.length - 1;

    answer.push(a[0], a[b]);
    
    
    return answer.join(" ");
}