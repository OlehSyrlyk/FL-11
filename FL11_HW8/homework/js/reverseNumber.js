function reverseNumber(num) {
    let a = ""
    num = num + a;
    return num.split(a).reverse().join(a);
}
console.log(reverseNumber(228222));