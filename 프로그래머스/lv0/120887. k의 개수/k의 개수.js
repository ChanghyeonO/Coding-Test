function solution(i, j, k) {
    var answer = 0;
    let arr = [];
    for(let f = i; f <= j; f ++){
        arr.push(f);
    }
    let splitArr = arr.join('').split('');
    for(let m = 0; m < splitArr.length; m++){
        if(splitArr[m] == k){
            answer += 1;
        }
    }
    return answer;
}