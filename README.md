# mini-jest
A good simulation of how jest testing framework works under the hood

## How it works ?
This framework is consisted of two [functions](https://github.com/bassamkdev/mini-jest/blob/master/globals-setup.js):
1. ### **_expect_** function:
    Gets the actual result of calling the function that is supposed to be tested as input, and returns an object that has a set of methods like _toBe_, _toEqual_, ... which throw Error if the condition is not met
2. ### ***_test_** function:
    Gets a title for test and a callback function as arguments and its output is the result of the test

## How to write a test ?
_Syncronous function_
```javascript
const division = (a,b) => a / b;

test('division works', () => {
    const result = division(10,2);
    const expected = 5;
    expect(result).toBe(expected)
})
```
_Asyncronous function_
```javascript
const divisionAsync = (...args) => Promise.resolve(division(...args));

test('division works asyncronously', async () => {
    const result = await divisionAsync(10,2);
    const expected = 5;
    expect(result).toBe(expected)
})
```
## How to run the tests ?
- copy the `globals-setup.js` file into the root directory of your project 
- inside the project root directory run:
`node --require ./global-setup.js *file_containig_tests*` 