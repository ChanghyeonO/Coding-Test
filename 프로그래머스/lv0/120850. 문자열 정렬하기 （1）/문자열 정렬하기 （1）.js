function solution(my_string) {
    var answer = [];
    let justNum = my_string.replace(/[a-zA-Z]/g,'');
    let arr = justNum.split('');
    arr = arr.sort();

    for(let i = 0; i < arr.length; i++){
        answer.push(Number(arr[i]))
    }

    return answer;
}