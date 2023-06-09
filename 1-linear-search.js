function linearSearch(arr, n) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
        if (arr[i] === n) {
            console.log(i);
            return i;
        }
        count += 1;
        console.log(`count is ${count}`);
    }
    return null;
}

linearSearch([1, 4, 5, 3, 2, 6, 8], 5);
