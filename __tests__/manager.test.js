// Import Manager class
const Manager = require('../lib/manager');


test('create manager object', () => {
    // instantiate new  manager class
    const manager = new Manager('Leo', 2,'7187187187');

    // creates object
    expect(typeof(manager)).toBe('object')
    // name is string
    expect(manager.name).toEqual(expect.any(String));
    // id is number
    expect(manager.id).toEqual(expect.any(Number));
    // office number is number
    expect(manager.officeNum).toEqual(expect.any(Number))
});

// Test getOfficeNum method
test("getOfficeNum method return github.", () => {
    const officeNum = "Leo";
    const manager = new Manager(officeNum);
    expect(manager.getOfficeNum()).toBe(officeNum);
});

// Test getRole method
test("getRole method return role.", () => {
    const role = "Manager";
    const manager = new Manager(role);
    expect(manager.getRole()).toBe(role);
});