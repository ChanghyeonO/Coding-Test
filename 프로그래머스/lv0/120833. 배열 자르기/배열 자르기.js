function solution(numbers, num1, num2) {
    var answer = [];
    let num2Arr = [];
    let num1Arr = [];
    for(let i = 0; i <= num2; i++){
        num2Arr.push(numbers[i]);
    }
    for(let j = 0; j < num1; j++){
        num1Arr.push(numbers[j]);
    }
    
    for(let k = 0; k < num2Arr.length; k++){
        if(num2Arr[k] !== num1Arr[k]){
            answer.push(num2Arr[k])
        }
    }
    return answer;
}