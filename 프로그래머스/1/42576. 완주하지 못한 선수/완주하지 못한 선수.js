// function solution(participant, completion) {
    
//     let completionCopy = [...completion];
    
//     const answer = participant.filter(item => {
//         const idxInCompletion = completionCopy.indexOf(item);
//         // console.log(idxInCompletion)
//         // 완주자를 찾는다
//         if (idxInCompletion !== -1){
//             // 완주자를 참가자에서 1개씩 삭제
//             // console.log(idxInCompletion)
//             // console.log(completionCopy.splice(idxInCompletion, 1))

//             completionCopy.splice(idxInCompletion, 1);
//             return false;
//             // 필터링 결과에서 제외
//         }else{
//             return true;
//             // 필터링 결과에 포함
//         }
//     })
//     return answer.join();
// }

function solution(participant, completion) {
    // 완주자를 객체로 저장
    const completionMap = {};

    // 완주자 목록을 객체에 저장
    for (let i = 0; i < completion.length; i++) {
        let person = completion[i];
        if (completionMap[person]) {
            completionMap[person]++;
        } else {
            completionMap[person] = 1;
        }
    }

    // 참가자 목록을 확인하며 완주자와 비교
    for (let i = 0; i < participant.length; i++) {
        let person = participant[i];
        if (completionMap[person]) {
            completionMap[person]--;
        } else {
            return person; // 완주하지 못한 사람
        }
    }
}
