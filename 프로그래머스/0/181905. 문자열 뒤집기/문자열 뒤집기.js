function solution(my_string, s, e) {
    var answer = [];
    let arr = my_string.split('');
    for (let i = 0; i < arr.length; i++) {
        if (i < s || i > e) {
            answer.push(arr[i]);
        } else if (i >= s && i <= e) {
            let reverseIdx = e - (i - s);
            answer.push(arr[reverseIdx]);
        }
    }
    
    return answer.join("");
}