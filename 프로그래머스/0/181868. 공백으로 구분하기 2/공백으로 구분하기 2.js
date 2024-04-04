function solution(my_string) {
    var answer = my_string.split(" ").filter((e)=>e.length > 0)
    
    return answer;
}