// Import Intern class
const Intern = require('../lib/intern');


test('create intern object', () => {
    // instantiate new  intern class
    const intern = new Intern('Leo', 2,'kingleo@gmail.com');

    // creates object
    expect(typeof(intern)).toBe('object')
    // name is string
    expect(intern.name).toEqual(expect.any(String));
    // id is number
    expect(intern.id).toEqual(expect.any(Number));
    // school is string
    expect(intern.school).toEqual(expect.any(String))
});

// Test getSchool method
test("getSchool method return github.", () => {
    const school = "Leo";
    const intern = new Intern(school);
    expect(intern.getSchool()).toBe(school);
});

// Test getRole method
test("getRole method return role.", () => {
    const role = "Engineer";
    const intern = new Intern(role);
    expect(intern.getRole()).toBe(role);
});