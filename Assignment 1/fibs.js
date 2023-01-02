function fibs(num) {
    let currentNum = 1;
    let previousNum = 0;
    let fibNum
    let arr = [];
    let i = 0;

    if (num == 0) return 0

    else {
        while (num > i) {
            fibNum = (previousNum + currentNum);
            arr.push(previousNum);
            previousNum = currentNum;
            currentNum = fibNum;
            i++
        };
        return arr;
    };
};

console.log(fibs(8));