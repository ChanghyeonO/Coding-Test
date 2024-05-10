function solution(arr, queries) {
    var answer = arr.slice();
    for(let q = 0; q < queries.length; q++){
        const s = queries[q][0];
        const e = queries[q][1];
         for (let i = s; i <= e; i++) {
            answer[i] += 1;
        }   
    }
    return answer;
}