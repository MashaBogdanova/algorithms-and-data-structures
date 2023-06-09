function span(arr, predicate) {
    const first = [];
    const second = [];
    let index;

    for (let i = 0; i < arr.length; i++) {
        if (predicate(arr[i])) {
            first.push(arr[i]);
        } else {
            index = i;
            break;
        }
    }

    for (let i = index; i < arr.length; i++) {
        second.push(arr[i])
    }
    return [first, second];
}

function isEven(x) {
    return Math.abs(x) % 2 === 0;
}

console.log(span([1,4,5,7,6], isEven));
