const { multiply, division } = require('./math.js');

test('multiply works', () => {
    const result = multiply(3,5);
    const expected = 15;
    expect(result).toBe(expected)
})

test('division works', () => {
    const result = division(10,2);
    const expected = 5;
    expect(result).toBe(expected)
})

function test (title, callback) {
    try {
        callback();
        console.log(`✅ ${title}`);
    } catch (error) {
        console.error(`❌ ${title}`);
        console.error(error);
    }
}

function expect (output) {
    return {
        toBe (expected) {
            if (output !== expected) {
                throw new Error(`${output} is not equal to ${expected}`)
            }
        }
    }
}