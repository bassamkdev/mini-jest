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

global.test = test
global.expect = expect