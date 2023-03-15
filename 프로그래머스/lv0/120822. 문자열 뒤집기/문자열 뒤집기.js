function solution(my_string) {
    var answer = '';
    let strToArr = my_string.split('');
    let answerArr = [];
    for(let i = strToArr.length - 1; i >= 0; i--){
        answerArr.push(strToArr[i])
    }
    
    answer = answerArr.join('');

    return answer;
}