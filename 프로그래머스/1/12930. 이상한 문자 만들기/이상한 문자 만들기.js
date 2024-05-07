function solution(s) {
    var answer = [];
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        let transformedWord = '';
        for (let k = 0; k < word.length; k++) {        
            if (k % 2 === 0) {
                transformedWord += word[k].toUpperCase();
            } else {
                transformedWord += word[k].toLowerCase();
            }
        }
        answer.push(transformedWord);
    }
    return answer.join(" ");
}