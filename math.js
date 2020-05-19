const multiply = (a,b) => a * b;
const division = (a,b) => a / b;

const multiplyAsync = (...args) => Promise.resolve(multiply(...args));
const divisionAsync = (...args) => Promise.resolve(division(...args)); 

module.exports = {
    multiply,
    division,
    multiplyAsync,
    divisionAsync
}