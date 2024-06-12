function solution(numbers, direction) {
    var answer = [];
    
    // 만약 direction이 "right"라면
    if(direction == "right"){
        // 배열의 마지막 요소를 answer에 추가
        answer.push(numbers[numbers.length - 1]);
        // 첫 번째 요소부터 마지막-1 요소까지 answer에 추가
        for(let i = 0; i < numbers.length - 1; i++){
            answer.push(numbers[i]);
        }
    } 
    // 만약 direction이 "left"라면
    else if(direction == "left"){
        // 두 번째 요소부터 마지막 요소까지 answer에 추가
        for(let j = 1; j < numbers.length; j++){
            answer.push(numbers[j]);
        }
        // 첫 번째 요소를 answer에 추가
        answer.push(numbers[0]);
    }
    
    // 최종적으로 answer 배열 반환
    return answer;
}