// Import Engineer class
const Engineer = require('../lib/engineer');


test('create engineer object', () => {
    // instantiate new  Engineer class
    const engineer = new Engineer('Leo', 2,"kindleo@gmail.com", "kingleo");

    // creates object
    expect(typeof(engineer)).toBe('object')
    // name is string
    expect(engineer.name).toEqual(expect.any(String));
    // id is number
    expect(engineer.id).toEqual(expect.any(Number));
     // email contains '@'
     expect(engineer.email).toContain("@");
      // email is string
    expect(engineer.email).toEqual(expect.any(String));
    // github is string
    expect(engineer.gitHub).toEqual(expect.any(String));
});

