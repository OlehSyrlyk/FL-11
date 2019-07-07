let A = prompt('Enter A side of triangle');
let B = prompt('Enter B side of triangle');
let C = prompt('Enter C side of triangle');
if (A + B <= C || A + C <= B || B + C <= A) {
    console.log('Triangle doesn’t exist!')
} else if (A === B && B ===C ) {
    console.log('Eequivalent triangle')
} else if (A === B && A !== C || B === C && B !== A || C === A && C !== B) {
    console.log('Isosceles triangle')
} else {
    console.log('Normal triangle')
}