function solution(numbers) {
    var answer = 0;
    let sortArr = numbers.sort(function(a,b){
        return a - b;
    });
    
    let a = sortArr[0] * sortArr[1];
    let b = sortArr[sortArr.length-1] * sortArr[sortArr.length-2]
    
 if(a >= b){
     answer = a;
 }else{
     answer = b;
 }
        // console.log(sortArr[0] * sortArr[1])
        // console.log(sortArr[sortArr.length-1] * sortArr[sortArr.length-2])
    
    return answer;
}