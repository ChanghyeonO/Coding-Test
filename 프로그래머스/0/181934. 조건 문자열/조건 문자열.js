function solution(ineq, eq, n, m) {
    if(ineq === ">" && eq === "="){
        return n >= m == true ? 1 : 0;
    }
    if(ineq === "<" && eq === "="){
        return n <= m == true ? 1 : 0;
    } 
    if(ineq === ">" && eq === "!"){
        return n > m == true ? 1 : 0;
    }
    if(ineq === "<" && eq === "!"){
        return n < m == true ? 1 : 0;
    } 
}