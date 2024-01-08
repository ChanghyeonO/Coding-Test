import re
def solution(order):
    answer = re.findall('[369]', str(order))
    answer = len(answer)
    return answer