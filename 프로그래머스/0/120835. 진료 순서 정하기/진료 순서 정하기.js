function solution(emergency) {
    let answer = [];
    
    // 배열 복사본 생성 이유는 emergency를 직접 sort로 조작하면 원본 배열을 바꿔버려서 값이 다르게 나옴
    let sortArr = [...emergency].sort((a, b) => b - a);

    // for 문을 돌려서 emergency의 길이 만큼 for문을 돌고 sortArr내에 emergency의[i] 째 위치를 찾아서 answer 배열에 push
    for (let i = 0; i < emergency.length; i++) {
        answer.push(sortArr.indexOf(emergency[i]) + 1)
    }

    return answer;
}

// 백준 허브를 안깔아놔서 재업로드