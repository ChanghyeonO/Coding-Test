function solution(n, arr1, arr2) {
    
 let a = arr1.map(idx => {
        let binStr = idx.toString(2);  // 2진수로 변환
        // 앞에 필요한 만큼의 0을 추가한 후, slice로 뒤에서 n개의 문자만 취함
        return ("0000000000" + binStr).slice(-n);
    });
    
    // arr2도 동일한 방식으로 처리
    let b = arr2.map(idx => {
        let binStr = idx.toString(2);  // 2진수로 변환
        // 앞에 필요한 만큼의 0을 추가한 후, slice로 뒤에서 n개의 문자만 취함
        return ("0000000000" + binStr).slice(-n);
    });

    console.log(a);  // arr1의 2진수 배열
    console.log(b);  // arr2의 2진수 배열
    
    console.log(a, b)
    
    var answer = [];
    return answer;
}