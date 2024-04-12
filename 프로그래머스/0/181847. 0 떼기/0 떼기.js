function solution(n_str) {
    const firstNonZeroIndex = n_str.search(/[^0]/);
    return n_str.substring(firstNonZeroIndex);
}
