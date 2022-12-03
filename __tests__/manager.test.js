// Import Manager class
const Manager = require('../lib/manager');


test('create manager object', () => {
    // instantiate new  manager class
    const manager = new Manager('Leo', 2,'kingleo@gmail.com');

    // creates object
    expect(typeof(manager)).toBe('object')
    // name is string
    expect(manager.name).toEqual(expect.any(String));
    // id is number
    expect(manager.id).toEqual(expect.any(Number));
    // office number is number
    expect(manager.officeNum).toEqual(expect.any(Number))
});