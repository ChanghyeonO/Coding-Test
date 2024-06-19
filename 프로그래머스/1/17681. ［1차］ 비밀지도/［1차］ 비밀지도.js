function solution(n, arr1, arr2) {
 let answer = [];
 let a = arr1.map(idx => {
        let str = idx.toString(2); 
        return ("00000000" + str).slice(-n);
    });
    

 let b = arr2.map(idx => {
        let str = idx.toString(2)
        return ("00000000" + str).slice(-n);
    }); 
    
    console.log(a, b)
     for (let i = 0; i < n; i++) {
        let c = '';
        for (let j = 0; j < n; j++) {
            if (a[i][j] === '1' || b[i][j] === '1') {
                c += '#';
            } else {
                c += ' ';
            }
        }
        answer.push(c);
    }
    
    
    return answer;
}