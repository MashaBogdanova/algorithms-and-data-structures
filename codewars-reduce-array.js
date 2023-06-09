function setReducer(arr) {
    let prev = arr[0];
    let counter = 1;
    const newArr = [];
        for (let i = 1; i < arr.length; i += 1) {
            if (arr[i] !== prev) {
                newArr.push(counter);
                counter = 1;
            } else {
                counter += 1;
            }
        }

    console.log(newArr)
    // if (newArr.length === 1) {
    //    return Number(...newArr);
    // } else {
    //     setReducer(newArr);
    // }
}

setReducer([1, 4, 3, 3, 3, 6]);
