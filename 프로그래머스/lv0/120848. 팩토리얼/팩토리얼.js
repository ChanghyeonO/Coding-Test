function solution(n) {
    let i = 1;
    let 팩토리얼 = 1;
    while (팩토리얼 <= n){
        i += 1;
        팩토리얼 *= i;
    }
    console.log(i)
    return i - 1;
}