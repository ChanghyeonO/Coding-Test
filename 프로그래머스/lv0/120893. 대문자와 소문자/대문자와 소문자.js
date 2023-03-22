function solution(my_string) {
    let strArr = my_string.split("");
    let valueArr = [];
    for(let i = 0; i < strArr.length; i++){
            let newArr = strArr[i];
        if(newArr.toUpperCase() === newArr){
            valueArr.push(newArr.toLowerCase()); 
        }else {
            valueArr.push(newArr.toUpperCase());
        }
    }
    return answer = valueArr.join("");
}