function solution(a, b) {
    var answer = 0;
    const firstCase = a.toString() + b.toString()
    const secondCase = 2 * a * b
    if( firstCase >= secondCase ){
        return Number(firstCase)
    }else{
        return Number(secondCase)
    }
}