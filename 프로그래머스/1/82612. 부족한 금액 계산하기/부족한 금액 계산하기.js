function solution(price, money, count) {
    let answer = 0;
    let addPrice = 0;
    
    for(let i = 1; i <= count; i++){
        addPrice += price * i
    }
    
    const afterPay = money - addPrice;
    const deleteMinus = Math.abs(afterPay);
     
    afterPay > 0 ? answer == 0 : answer = deleteMinus;


    return answer;
}