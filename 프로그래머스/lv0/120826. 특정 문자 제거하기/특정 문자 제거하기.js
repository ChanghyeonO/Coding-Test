function solution(my_string, letter) {
    var answer = [];
    let mystringArr = my_string.split('')
    for(let i = 0; i < mystringArr.length; i++){
        if(mystringArr[i] !== letter) {
           answer.push(mystringArr[i])
        }
    }
    return answer.join('');
}