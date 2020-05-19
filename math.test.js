const { multiply, division, divisionAsync, multiplyAsync } = require('./math.js');

test('multiply works asyncronously', async () => {
    const result = await multiplyAsync(3,5);
    const expected = 15;
    expect(result).toBe(expected)
})

test('division works asyncronously', async () => {
    const result = await divisionAsync(10,2);
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

