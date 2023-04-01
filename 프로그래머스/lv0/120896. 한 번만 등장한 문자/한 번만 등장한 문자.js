function solution(s) {
    var answer = [];
    for(const char of s){
        if(s.indexOf(char) === s.lastIndexOf(char)){
            answer.push(char)
        }
    }
    return answer.sort().join('');
}
