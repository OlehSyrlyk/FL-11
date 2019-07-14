let pipe = function (num) {
    for (let i = 1; i < arguments.length; i++) {
        num = arguments[i](num);
    }
    return num;
}

function addOne(num) {
    return num + 1;
  }

console.log(pipe(1, addOne));
console.log(pipe(1, addOne, addOne));