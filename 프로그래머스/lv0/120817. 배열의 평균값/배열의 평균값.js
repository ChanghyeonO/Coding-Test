function solution(numbers) {
    var answer = 0;
    let addNumbers = 0;
    
    for(let i = 0; i < numbers.length; i++){
        addNumbers += numbers[i];
    }
    
    answer = addNumbers / numbers.length;
    return answer;
}