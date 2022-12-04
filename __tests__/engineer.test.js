// Import Engineer class
const Engineer = require('../lib/engineer');


test('create engineer object', () => {
    // instantiate new  Engineer class
    const engineer = new Engineer('Leo', 2, "king.leo");

    // creates object
    expect(typeof(engineer)).toBe('object')
    // name is string
    expect(engineer.name).toEqual(expect.any(String));
    // id is number
    expect(engineer.id).toEqual(expect.any(Number));
    // github is string
    expect(engineer.github).toEqual(expect.any(String))
});

// Test getGitHub method
test("getGitHub method return github.", () => {
    const github = "Leo";
    const engineer = new Engineer(github);
    expect(engineer.getName()).toBe(github);
});

// Test getRole method
test("getRole method return role.", () => {
    const role = "Engineer";
    const engineer = new Engineer(role);
    expect(engineer.getRole()).toBe(role);
});
