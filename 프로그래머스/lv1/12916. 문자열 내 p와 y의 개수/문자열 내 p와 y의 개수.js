function solution(s){
    var answer = true;
    const Arr = s.split('');
    // console.log(Arr);
    let a = 0;
    let b = 0;
    Arr.map((i)=>{
        if(i == "p" || i == "P"){
            a++;
        }else if(i == "y" || i == "Y"){
            b++;
        }
    })
    if(a == b){
        answer == true;
    }else{
        answer = false;
    }

    return answer;
}