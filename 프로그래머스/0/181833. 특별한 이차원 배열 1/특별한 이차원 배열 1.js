function solution(n) {
    let answer = [];
    // for문을 사용해 n만큼 배열 먼저 생성 하기
    for (let i = 0; i < n; i++) {
        let arr = [];
        // console.log(arr)
        
        // 이중 for문 사용해서 n의 갯수만큼 생성된 배열에 n개만큼 0을 집어넣음
        for (let j = 0; j < n; j++) {
            arr.push(0); 
        }
        
        // splice에 들어가는 매개변수 첫번째는 n번째 위치 지목, 
        // 가운데는 n번째 위치부터 n개를 선택,
        // 마지막은 대체할 요소를 넣는다
        arr.splice(i, 1, 1); 
        console.log(arr)
        
        // 이렇게 생성된 배열을 answer에다가 push
        answer.push(arr);
    }
    return answer;
}
