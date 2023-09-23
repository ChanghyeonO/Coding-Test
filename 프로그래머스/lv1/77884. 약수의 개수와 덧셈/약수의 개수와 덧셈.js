function solution(left, right) {
    let answer = 0;
    for(let i = left; i <= right; i++) {
        let divisorCount = 0;
        for(let j = 1; j * j <= i; j++) {
            if(i % j === 0) {
                if(j * j === i) {
                    divisorCount++; 
                } else {
                    divisorCount += 2; 
                }
            }
        }
        if(divisorCount % 2 === 0) answer += i;
        else answer -= i;
    }
    return answer;
}
