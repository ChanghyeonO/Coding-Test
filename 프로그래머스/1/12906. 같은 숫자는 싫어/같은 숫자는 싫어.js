function solution(arr)
{
    var answer = [];

    console.log(arr.length)
    for(let i = 0; i < arr.length; i++){
        
       answer.push(arr[i])
        if(arr[i] == arr[i + 1]){
           answer.pop()
        }
        
    }

    
    return answer;
}