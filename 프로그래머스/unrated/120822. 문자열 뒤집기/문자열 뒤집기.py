def solution(my_string):
    answer = []
    for i in my_string:
        answer.append(i)
    answer.reverse()
    result = ''.join(answer)
    return result