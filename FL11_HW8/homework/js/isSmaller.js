let isBigger = (a, b) => a > b;
let isSmaller = (a, b) => !isBigger(a, b);
console.log(isSmaller(5, -1));
