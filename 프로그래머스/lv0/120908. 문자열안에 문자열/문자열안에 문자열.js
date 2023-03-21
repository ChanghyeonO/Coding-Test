function solution(str1, str2) {
    for (let i = 0; i <= str1.length - str2.length; i++) {
        let found = true;
        for (let j = 0; j < str2.length; j++) {
            if (str1[i+j] !== str2[j]) {
                found = false;
                break;
            }
        }
        if (found) {
            return answer = 1;
        }
    }
    return answer = 2;  
}