function countUniqueValues(sortedArray) {
    if (!Array.isArray(sortedArray)) return;
    if (sortedArray.length === 0) return 0;
    let currentUniqueItemIndex = 0, nextItemIndex = 1;

    while (nextItemIndex < sortedArray.length) {
        const thisItem = sortedArray[currentUniqueItemIndex];
        const nextItem = sortedArray[nextItemIndex];
        if (thisItem !== nextItem) {
            currentUniqueItemIndex++;
            sortedArray[currentUniqueItemIndex] = nextItem;
        }
        nextItemIndex++;
    }

    return currentUniqueItemIndex + 1;
}

console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13]))
//                             0, 1, 2, 3, 4, 5, 6, 7, 8 , 9 , 10