function solution(n) {
    var answer = 0;   
    let arr = []
    for(let i = 1; i <= 1000000; i++){
        if(n % i == 0){
            arr.push(i)
        }        
    }
    return answer = arr.length;
}