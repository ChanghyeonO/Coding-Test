function solution(n, m) {
    function gcd(a, b) {
        if (b === 0) return a;
        return gcd(b, a % b);
    }

    function lcm(a, b) {
        return (a * b) / gcd(a, b);
    }

    var answer = [];
    answer.push(gcd(n, m)); 
    answer.push(lcm(n, m)); 

    return answer;
}
