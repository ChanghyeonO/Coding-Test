function solution(s) {
    
    const answer = s.split(" ")
    .map(a => a.charAt(0).toUpperCase()+a.slice(1).toLowerCase())
    .join(" ");

    
    return answer;
}