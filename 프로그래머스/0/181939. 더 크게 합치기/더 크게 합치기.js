function solution(a, b) {
    const c = Number(a.toString() + b.toString())
    const d = Number(b.toString() + a.toString())
    
    if(c > d){
        return c;
    } else if(c < d){
        return d;
    }else if(a == b){
        return c;
    }
}