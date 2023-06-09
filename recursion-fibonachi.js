function getFibonachi(n) {
    console.log(n)
    if(n === 1 || n === 2) {
        return 1;
    }
    return getFibonachi(n-1) + getFibonachi(n - 2);
}

console.log(getFibonachi(3));
// 3 ->

