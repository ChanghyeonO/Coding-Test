function solution(my_string, n) {
    var answer = [];
    let strArr = my_string.split("");
    for(let i = 0; i < strArr.length; i++){
        answer.push(strArr[i].repeat(n));
    };
    
    
    return answer = answer.join('');
}