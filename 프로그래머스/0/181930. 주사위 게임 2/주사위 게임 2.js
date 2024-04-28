function solution(a, b, c) {
    var sum = a + b + c;
    var sumSquares = a*a + b*b + c*c;
    var sumCubes = a*a*a + b*b*b + c*c*c;

    if (a === b && b === c) {
        return sum * sumSquares * sumCubes;
    } else if (a === b || a === c || b === c) {
        return sum * sumSquares;
    } else {
        return sum;
    }
}
