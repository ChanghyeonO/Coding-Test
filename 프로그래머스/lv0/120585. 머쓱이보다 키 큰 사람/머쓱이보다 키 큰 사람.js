function solution(array, height) {
    var answer = 0;
    let high = [];
    // let hight = [];
    for(let i = 0; i < array.length; i++){
        if(array[i] > height){
            high.push(array[i])
        }
    }
    
    
    return answer = high.length;
}