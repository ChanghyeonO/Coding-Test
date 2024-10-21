function solution(arr) {
    let answer = [...arr];
    let targetLength = 1;
    
    
    while(targetLength < arr.length){
        console.log(targetLength)
        targetLength *= 2;
    }
    
    while(answer.length < targetLength){
        answer.push(0);
    }
    
    return answer;
}