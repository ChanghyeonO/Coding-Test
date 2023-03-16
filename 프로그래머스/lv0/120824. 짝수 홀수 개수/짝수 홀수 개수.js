function solution(num_list) {
    var answer = [];
    let anOddNum = [];
    let anEvenNum = [];
    
    for(let i = 0; i < num_list.length; i++){
        if(num_list[i] % 2 == 0){
            anEvenNum.push(num_list[i])
        }else{
            anOddNum.push(num_list[i])
        }
    }
    answer.push(anEvenNum.length);
    answer.push(anOddNum.length);
    
    return answer;
}