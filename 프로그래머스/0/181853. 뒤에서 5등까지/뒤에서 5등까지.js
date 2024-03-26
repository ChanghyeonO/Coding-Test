function solution(num_list) {
    var answer = [];
    a = num_list.sort((a, b)=> a - b)
    for(let i = 0; i < 5; i++){
        answer.push(a[i])
    }
    return answer;
}