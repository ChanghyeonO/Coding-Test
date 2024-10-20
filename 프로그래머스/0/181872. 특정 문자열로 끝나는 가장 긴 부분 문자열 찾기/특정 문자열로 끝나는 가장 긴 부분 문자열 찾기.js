function solution(myString, pat) {
    var answer = '';
    const arr1 = myString.split('');
    const pat마지막단어찾기 = pat[pat.length -1];
    const filterdArr1 = arr1.lastIndexOf(pat마지막단어찾기);
    answer = arr1.splice(0, filterdArr1 + 1).join('');
    
    return answer;
}