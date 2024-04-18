function solution(num_list, n) {
    var answer = num_list.slice(n)
    let arr = num_list.slice(0, n)
    for(let i = 0; i < arr.length; i++){
        answer.push(arr[i])
    }
    return answer;
}