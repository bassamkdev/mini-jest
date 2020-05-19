const { multiply, divison } = require('./math.js');

let result = multiply(4,5);
let expected = 20 

if (result !== expected) {
    throw new Error(`${result} is not equal to ${expected}`)
}