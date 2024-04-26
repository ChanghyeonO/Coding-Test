function solution(arr, intervals) {
    var firstInterval = arr.slice(intervals[0][0], intervals[0][1] + 1);
    var secondInterval = arr.slice(intervals[1][0], intervals[1][1] + 1);
    
    var answer = firstInterval.concat(secondInterval);
    
    return answer;
}
