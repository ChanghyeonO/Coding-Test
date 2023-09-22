function solution(s) {
    var answer = '';
    const LengthS = s.length
    if( LengthS % 2 !== 0){
        answer = s[(Math.ceil(LengthS / 2) - 1)]
    } else if (LengthS % 2 == 0){
       answer = s[(LengthS / 2) - 1] + s[LengthS / 2] 
    }
    return answer;
}