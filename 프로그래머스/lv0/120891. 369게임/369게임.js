function solution(order) {
    var answer = 0;
    let stringArray = order.toString().split("");
    for(let i = 0; i < stringArray.length; i++){
        if(stringArray[i] == 3 || stringArray[i] == 6 || stringArray[i] == 9){
            answer += 1;
        }
    } 
    return answer;
}