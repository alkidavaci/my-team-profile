// Import Engineer class
const Engineer = require('../lib/engineer');


test('create engineer object', () => {
    // instantiate new  Engineer class
    const engineer = new Engineer('Leo', 2,'kingleo@gmail.com');

    // creates object
    expect(typeof(engineer)).toBe('object')
    // name is string
    expect(engineer.name).toEqual(expect.any(String));
    // id is number
    expect(engineer.id).toEqual(expect.any(Number));
    // github is string
    expect(engineer.github).toEqual(expect.any(String))
});