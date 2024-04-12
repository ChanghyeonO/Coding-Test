function solution(arr, delete_list) {
    const deleteSet = new Set(delete_list);
    const answer = arr.filter(item => !deleteSet.has(item))
    return answer;
}