function solution(num, k) {
    var answer = 0;
    let stringArray = num.toString().split("")
    let stringK = k.toString();
    
    let index = stringArray.indexOf(stringK);
    
    if(index !== -1){
        answer = index + 1;
    }else {
        answer = -1
    }
    
    console.log(index)
    return answer;
}