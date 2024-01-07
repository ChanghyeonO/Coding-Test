def solution(arr):

    answer = []
    #빈배열
    for i in range(len(arr)):
        # arr의 길이만큼 반복
        answer.append(arr[i])
        # answer에 arr[i]번째를 추가
        if [arr[i]] == arr[i + 1: i + 2]:
            #만약 arr[i]번째가 arr의 i + 1번 중에 있다면
            answer.pop()
            #answer에서 제거
    return answer