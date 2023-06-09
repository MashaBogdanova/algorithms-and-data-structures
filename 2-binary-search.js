let counter = 0;

function binarySearch(arr, n) {
    let start = 0;
    let end = arr.length;
    let middle;
    let found = false;
    let position = -1;

    while (found === false && start <= end) {
        middle = Math.floor((end - start) / 2);
        if (n === arr[middle]) {
            found = true;
            position = middle;
            return position;
        }
        if (n < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        counter += 1;
    }
    return position;
}

console.log(binarySearch([1, 4, 5, 3, 2, 6, 8], 5));
console.log(counter);

function binaryRecursivelySearch(arr, n, startIndex, endIndex) {
    const middleIndex = Math.floor(arr.length / 2);

    if (n === arr[middleIndex]) {
        return middleIndex;
    }
    if (n < middleIndex) {
        return binaryRecursivelySearch(arr, n, startIndex, middleIndex -1);
    } else {
        return binaryRecursivelySearch(arr, n, middleIndex +1, endIndex);
    }
}

console.log(binaryRecursivelySearch([1, 4, 5, 3, 2, 6, 8], 5));

