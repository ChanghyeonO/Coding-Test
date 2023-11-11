function solution(s){
    let answer = true;
    let count = 0;
    const a = s.split('');
     if(a[0] == ')' ){
        return answer = false;
        }
    for(let i = 0; i < a.length; i++){
        if(a[i] == '(' ){
            count ++;
        }else if(a[i] == ')' ){
            count --;
            if(count < 0){
                break;
            }
        }
    }
    if(count !== 0){
        answer = false;
    }
    
    return answer;
}