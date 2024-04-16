function solution(myString) {
    let arr1 = myString.split("")
    let arr2 = []
    for(let i = 0; i < arr1.length; i++){
        if(arr1[i] === "a" || arr1[i] === "A"){
            arr2.push("A")
        }else{
            arr2.push(arr1[i].toLowerCase())
        }
    }
    return arr2.join("")
}