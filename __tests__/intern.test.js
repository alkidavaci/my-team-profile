// Import Intern class
const Intern = require('../lib/intern');


test('create intern object', () => {
    // instantiate new  intern class
    const intern = new Intern('Leo', 2,'kingleo@gmail.com',"CU");

    // creates object
    expect(typeof(intern)).toBe('object')
    // name is string
    expect(intern.name).toEqual(expect.any(String));
    // id is number
    expect(intern.id).toEqual(expect.any(Number));
    // school is string
    expect(intern.school).toEqual(expect.any(String))
});