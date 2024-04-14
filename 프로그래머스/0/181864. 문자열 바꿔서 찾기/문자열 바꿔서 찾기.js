function solution(myString, pat) {
    let transform = '';

    for (let i = 0; i < myString.length; i++) {
        if (myString[i] === 'A') {
            transform += 'B';
        } else if (myString[i] === 'B') {
            transform += 'A';
        }
    }

    if (transform.includes(pat)) {
        return 1;
    } else {
        return 0;
    }
}