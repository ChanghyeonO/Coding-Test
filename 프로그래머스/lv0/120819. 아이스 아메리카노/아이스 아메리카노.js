function solution(money) {
    var answer = [];
    let buy = Math.floor(money / 5500);
    let left = money % 5500;

    answer.push(buy);
    answer.push(left);
    
    
    return answer;
}