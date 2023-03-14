function solution(n, k) {
    var answer = 0;
    let yangkkochi = 12000 * n;
    let drink = 2000 * k;
    
    let total = yangkkochi + drink;
    
    for(let i = 0; i < Math.floor(n / 10); i++){
        total -= 2000;
    }
    
    answer = total;
    return answer;
}