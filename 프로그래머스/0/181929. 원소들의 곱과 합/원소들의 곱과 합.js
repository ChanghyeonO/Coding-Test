function solution(num_list) {
    var answer = 0;
    let multiply = num_list.reduce((acc, cur)=>acc * cur, 1)
    let sum = (num_list.reduce((acc, cur)=>acc + cur, 0))**2
    if(multiply < sum){
        answer = 1;
    }
    return answer;
}