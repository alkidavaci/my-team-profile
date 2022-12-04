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

// Test getName method
test("getName method return name.", () => {
    const name = "Leo";
    const employee = new Employee(name);
    expect(employee.getName()).toBe(name);
});

// Test getId method
test("getId method method return id.", () => {
    const id = 2;
    const employee = new Employee(id);
    expect(employee.getId()).toBe(id);
});

// Test getEmail method
test("getEmail method return email.", () => {
    const email = "kingleo@gmail.com";
    const employee = new Employee(email);
    expect(employee.getEmail()).toBe(email);
});

// Test getRole method
test("getEmail method return role.", () => {
    const role = "Employee";
    const employee = new Employee(role);
    expect(employee.getRole()).toBe(role);
});
