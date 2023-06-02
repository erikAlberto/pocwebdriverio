const { suma } = require("../utils/for_testing");


describe('sum to numbers', () => {
    test('suma', () => {
        const result = suma(2, 2);
    
        expect(result).toBe(5);
    })

})