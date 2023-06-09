function maxProduct(arr) {
    const first = Math.max(...arr);
    let prevElem = arr[0];

    for (let elem of arr) {
        if (elem > prevElem && elem < first) {
            prevElem = elem;
        }
    }
    return first * prevElem;
}
