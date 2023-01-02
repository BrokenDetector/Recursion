function fibsRec(num) {
    let fibNum;

    if (num == 0) {
        return 0;
    }

    else {
        fibNum = (num - 1) + (num - 2)
        return fibNum;
    };
};

console.log(fibsRec(8));