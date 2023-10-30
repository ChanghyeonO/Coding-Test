function solution(s) {
    let answer = true;
    const regex = /[a-zA-Z]/;

    if (regex.test(s) || (s.length !== 4 && s.length !== 6)) {
        answer = false;
    }

    return answer;
}