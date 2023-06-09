function reverseNumber(n, b){
    let a = n;
    let resultArr = [];

    while (a > b) {
        resultArr.push(a % b);
        a = Math.trunc(a / b);
    }
    resultArr.push(a);
    resultArr = resultArr.reverse();

    return resultArr.reduce((sum, cur, index) => sum + cur * (b ** index));
}

reverseNumber(12, 2);
