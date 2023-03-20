function solution(price) {
    var answer = 0;
    
    if(price >= 500000){
        answer = price - (price * (20 /100));
    }else if (price >= 300000 && price < 500000) {
        answer = price - (price * (10 /100));
    }else if (price >= 100000 && price < 300000) {
        answer = price - (price * (5 /100));
    }else{
        answer = price;
    };
    return Math.floor(answer);
}