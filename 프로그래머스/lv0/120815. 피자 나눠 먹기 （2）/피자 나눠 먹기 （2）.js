function solution(n) {
    var answer = 1;
  for(let i = 0; i < n; i++){
      if(answer * 6 % n !==0){
         answer+= 1;
         }
  }
    return answer;
}
