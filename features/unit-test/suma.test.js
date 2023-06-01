const suma = require('../step-definitions/for_testing');
test('suma', () => {
    const result = suma(2, 2);

    expect(result).toBe(4);
})