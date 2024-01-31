function maxCoins(piles: number[]): number {
  let res: number = 0
    const sortedArr = quickSort(piles)
    const len: number = piles.length
    for (let i=0; i<=len/3-1; i++) {
        res += sortedArr[i*2+1]
    }
    return res
};



function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        const pivotIndex = partition(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

function partition(arr, left, right) {
    const pivot = arr[right];
    let i = left - 1;
    for (let j = left; j < right; j++) {
        if (arr[j] > pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }
    [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; 
    i + 1
    return i + 1;
}