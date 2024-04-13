function solution(arr1, arr2) {
    if (arr1.length > arr2.length) {
        return 1;
    } else if (arr1.length < arr2.length) {
        return -1;
    }
    
    const sumArr1 = arr1.reduce((acc, curr) => acc + curr, 0);
    const sumArr2 = arr2.reduce((acc, curr) => acc + curr, 0);
    
    if (sumArr1 > sumArr2) {
        return 1;
    } else if (sumArr1 < sumArr2) {
        return -1;
    } else {
        return 0;
    }
}
