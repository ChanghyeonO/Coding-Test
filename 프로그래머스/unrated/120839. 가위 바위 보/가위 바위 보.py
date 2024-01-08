def solution(rsp):
    d = {"0": "5", "2": "0", "5": "2"}
    answer = ''
    for i in rsp:
        answer += d[i]
    return answer