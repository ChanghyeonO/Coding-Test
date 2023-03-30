function solution(my_string) {
    const strArr = my_string.split('');
    const set = new Set(strArr);
    return answer = [...set].join('');
}