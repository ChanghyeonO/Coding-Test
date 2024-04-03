function solution(num_list) {
    if (num_list.length >= 11) {
        return num_list.reduce((sum, current) => sum + current, 0);
    } else {
        return num_list.reduce((product, current) => product * current, 1);
    }
}
