function solution(myString) {
    let answer = [];
    for(let i = 0; i < myString.length; i++){
        if(myString[i] > "l" === false){
            answer.push("l")
        }else {
            answer.push(myString[i])
        }
    }
    
    return answer.join('');
}