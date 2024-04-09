function solution(str_list, ex) {
    let filteredList = str_list.filter(str => !str.includes(ex));
    let answer = filteredList.join('');
    return answer;
}
