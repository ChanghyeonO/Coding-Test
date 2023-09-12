function solution(numbers) {
    var answer = 0;
    let arrSort = numbers
    for(let i = 0; i <= 9; i++){
        if(!arrSort.includes(i)){
           answer += i;
        }
    }

    return answer;
}