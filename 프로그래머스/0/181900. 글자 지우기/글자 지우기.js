function solution(my_string, indices) {
    let arr = my_string.split(""); 
    let answer = arr.filter((_, index) => !indices.includes(index)); 
    return answer.join('');
}
