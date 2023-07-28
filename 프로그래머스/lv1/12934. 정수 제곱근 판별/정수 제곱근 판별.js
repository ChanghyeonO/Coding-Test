function solution(n) {
    var answer = 0;
    const Check = (Math.sqrt(n))
   if(Number.isInteger(Check)){
    answer = (Check + 1) * (Check + 1)
   }else{
    answer = -1
   }
    return answer;
}