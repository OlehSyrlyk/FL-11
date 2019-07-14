let getMin = function () {
    let minNum = Infinity;

    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] < minNum) {
            minNum = arguments[i];
        }
    }
    return minNum;
}
console.log(getMin(1, 3, -1));