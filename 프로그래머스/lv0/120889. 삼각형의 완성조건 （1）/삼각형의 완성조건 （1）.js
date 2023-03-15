function solution(sides) {
    var answer = 0;
    numSort = sides.sort(function(a, b)  {
        return a - b;
    });
    if(numSort[2] >= numSort[0] + numSort[1]){
            answer = 2;
        }else {
            answer = 1;
        }
    console.log(answer)
    return answer;
}