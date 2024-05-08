function solution(d, budget) {
    var answer = 0
    let budgetRemain = budget;
    let sortArr = d.sort((a, b) => a - b);    
    for(let i = 0; i < sortArr.length; i++){
        if(budgetRemain - sortArr[i] >= 0){
            budgetRemain -= sortArr[i]
            answer += 1
        }
    }
    return answer;
}