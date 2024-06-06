function solution(cipher, code) {
  let answer = [];
  let strArr = cipher.split('');

  for (let i = 1; i <= cipher.length; i++) {
    const index = code * i - 1;
    if (index < strArr.length) {
      answer.push(strArr[index]);
    }
  }
  return answer.join('');
}
