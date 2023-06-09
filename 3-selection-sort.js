function selectionSort(arr) {
    // проходимся по изначальному массиву
    for (let i = 0; i < arr.length; i += 1) {
        let minIndex = i;
        // проходимся по отсавшемуся неотсортированному массиву в поисках минимального значения
        for (let j = i + 1; j < arr.length; j += 1) {
            // если текущее значение оставшегося массива меньше минимального, меняем минимальный индекс
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        // меняем местами старое минимальное значение и новое
        let tmp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = tmp;
    }
    return arr;
}

console.log(selectionSort([1, 4, 6, 3, 7, 8, 29]));

