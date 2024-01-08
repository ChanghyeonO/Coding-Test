def solution(num_list):
    answer = []
    a = []
    b = []
    for i in num_list:
        if i % 2 == 0:
            a.append(i)
        else:
            b.append(i)
    answer.append(len(a))
    answer.append(len(b))
    
    return answer