// Import Manager class
const Manager = require('../lib/manager');


test('create manager object', () => {
    // instantiate new  manager class
    const manager = new Manager('Leo', 2, 'kindleo@gmail.com', 205);

    // creates object
    expect(typeof(manager)).toBe('object')
    // name is string
    expect(manager.name).toEqual(expect.any(String));
    // id is number
    expect(manager.id).toEqual(expect.any(Number));
    // email contains '@'
    expect(manager.email).toContain("@");
    // email is string
    expect(manager.email).toEqual(expect.any(String));
    // office number is number
    expect(manager.officeNumber).toEqual(expect.any(Number))
});

