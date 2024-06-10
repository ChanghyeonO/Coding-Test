function solution(cipher, code) {
  let answer = []; // 해독된 암호를 저장할 배열 선언
  let strArr = cipher.split(''); // 문자열을 배열로 변환
    // console.log(strArr)
  //1부터 cipher의 길이까지 
  for (let i = 1; i <= cipher.length; i++) {
    const index = code * i - 1; // code의 배수 번째 인덱스 계산
    console.log(index)
    // if (index < strArr.length) { // 인덱스가 배열 길이보다 작을 때
      answer.push(strArr[index]); // 해당 인덱스 문자 배열에 추가
      
    // }
  }
  
  return answer.join(''); // 배열을 문자열로 변환하여 반환
}