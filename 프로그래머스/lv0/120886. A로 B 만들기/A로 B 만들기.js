function solution(before, after) {
    var answer = 0;
    const equals = (beforeArr, afterArr) => JSON.stringify(beforeArr) === JSON.stringify(afterArr);
    const beforeArr = before.split('').sort();
    const afterArr = after.split('').sort();
    
    if(equals(beforeArr, afterArr)){
        answer = 1;
    }else {
        answer = 0;
    }
    return answer;
}