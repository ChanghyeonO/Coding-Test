function solution(n, numlist) {
    var answer = [];
    let index = [];
    for(let i = 1; i <= 100000; i++){
        index.push(n * i)
    }

    return numlist.filter(x=> index.includes(x));
}