const { multiply, division, divisionAsync, multiplyAsync } = require('./math.js');

test('multiply works asyncronously', async () => {
    const result = await multiply(3,5);
    const expected = 15;
    expect(result).toBe(expected)
})

test('division works asyncronously', async () => {
    const result = await division(10,2);
    const expected = 5;
    expect(result).toBe(expected)
})


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

async function test (title, callback) {
    try {
        await callback();
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