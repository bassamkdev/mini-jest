const { multiply, divison } = require('./math.js');

let result = multiply(4,5);
let expected = 20 

expect(result).toBe(expected);

function expect (output) {
    return {
        toBe (expected) {
            if (output !== expected) {
                throw new Error(`${result} is not equal to ${expected}`)
            }
        }
    }
}