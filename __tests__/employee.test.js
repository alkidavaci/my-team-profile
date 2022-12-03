// Import Employee class
const Employee = require('../lib/employee');


test('create employee object', () => {
    // instantiate new  Employee class
    const employee = new Employee('Leo', 2,'kingleo@gmail.com');

    // creates object
    expect(typeof(employee)).toBe('object')
    // name is string
    expect(employee.name).toEqual(expect.any(String));
    // id is number
    expect(employee.id).toEqual(expect.any(Number));
    // email contains '@'
    expect(employee.email).toContain("@");
    // email is string
    expect(employee.email).toEqual(expect.any(String));
});