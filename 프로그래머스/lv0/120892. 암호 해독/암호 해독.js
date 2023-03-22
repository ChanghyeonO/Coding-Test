function solution(cipher, code) {
  let answer = '';
  let strArr = cipher.split('');
  let arr = [];
  for (let i = 1; i <= cipher.length; i++) {
    const index = code * i - 1;
    if (index < strArr.length) {
      arr.push(strArr[index]);
    }
  }
  answer = arr.join('');
  return answer;
}