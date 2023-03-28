function solution(age) {
    var answer = [];
    let alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];
    let numberArray = age.toString().split("");
    for(let i = 0; i < numberArray.length; i++){
        answer.push(alphabet[numberArray[i]])
    }
    return answer.join("");
}