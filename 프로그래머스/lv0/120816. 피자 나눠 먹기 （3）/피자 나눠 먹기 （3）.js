function solution(slice, n) {
    var answer = 0;
    answer = Math.ceil(n / slice);
    return answer;
}

//만약 n이 slice보다 많다면 answer에 1을 추가해주고 slice에 answer값을 곱해준다.