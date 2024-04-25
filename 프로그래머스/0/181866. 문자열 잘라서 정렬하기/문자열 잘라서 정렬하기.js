function solution(myString) {
    return myString.split('x').filter(part => part.length > 0).sort();
}
