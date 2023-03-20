function solution(my_string) {
    var answer = 0;
    let numArr = my_string.replace(/[^0-9]/gi,"").split("");
    numArr.forEach((a)=>{
        answer += Number(a);
    })
    return answer;
}