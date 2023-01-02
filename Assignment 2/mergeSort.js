function mergeSort(arr) {

    if (arr.length < 2) return arr

    else {
        let mid = Math.ceil(arr.length / 2);
        let left = arr.slice(0, mid);
        let right = arr.slice(mid);
        return merge(mergeSort(left), mergeSort(right))
    };
}

function merge(left, right) {
    let result = []
    while (left.length > 0 && right.length > 0) {
        if (left[0] < right[0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }
    return [...result, ...left, ...right];
}

console.log(mergeSort([5, 2, 1, 3, 6, 4]));
console.log(mergeSort([145, 9, 81, 163, 23, 18, 129]));