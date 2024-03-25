function solution(myString, pat) {
    var answer = 0;
    if(myString.toLowerCase().indexOf(pat.toLowerCase()) !== -1){
        answer = 1;
    }
    return answer;
}