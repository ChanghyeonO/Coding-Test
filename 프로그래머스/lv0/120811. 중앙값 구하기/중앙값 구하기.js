function solution(array) {
    var answer = 0;
    arr = array.sort(function(a, b) {
        return a - b
    });
    answer = arr[Math.floor(arr.length / 2)]
    return answer;
}