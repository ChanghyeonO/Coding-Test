function solution(s1, s2) {
    var answer = 0;
    let result = s1.filter(val => s2.includes(val));
    
    return answer = result.length;
}