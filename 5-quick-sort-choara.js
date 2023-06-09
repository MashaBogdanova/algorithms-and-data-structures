function quickSort(arr) {
    // Условие выхода из рекурсии, когда в массиве остается один элемент
    if (arr.length <= 1) {
        return arr;
    }
    // Поиск среднего элемента
    const middleIndex = Math.floor(arr.length / 2);
    const middleElem = arr[middleIndex];
    // Создание подмассивов
    const less = [];
    const greater = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === middleIndex) {
            // Если текущий элемент равен среднему, пропускаем его
            continue;
        }
        if (arr[i] > middleElem) {
            // Если текущий элемент больше среднего, пушаем в массив чисел больше среднего
            greater.push(arr[i]);
        } else {
            // Если текущий элемент меньше среднего, пушаем в массив чисел меньше среднего
            less.push(arr[i]);
        }
    }
    // Выводим массив из элементов вызова функции для массива less, потом средний элемент, потом для greater
    return [...quickSort(less), middleElem, ...quickSort(greater)];
}

quickSort([91, 4, 36, 35, 7, 8, 29]);

