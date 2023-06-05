import { suma } from "../../../src/utils/for_testing";

describe('sum to numbers', () => {
    test('suma', () => {
        const actualResult = suma(2, 2);
    
        expect(actualResult).toBe(4);
    })
})
