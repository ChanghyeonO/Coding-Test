function solution(ineq, eq, n, m) {
    var answer = 0;
    if(ineq === ">"){
        if(eq === "="){
            n >= m == true ? answer = 1 : 0
        }else {
            n > m == true ? answer = 1 : 0
        }
        
    }else if(ineq === "<"){
        if(eq === "="){
            n <= m == true ? answer = 1 : 0
        }else {
            n < m == true ? answer = 1 : 0
        }
        
    }
    return answer;
}