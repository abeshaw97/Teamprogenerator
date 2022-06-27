const Intern = require('../lib/Intern');

test('creates an Intern object', () => {
    const intern = new Intern('abe', 26, 'shawabra@msu.edu', 'MSU');
    
    expect(intern.school) .toEqual(expect.any(String));
});


test('gets employee school', () => {
    const intern = new Intern('abe', 26, 'shawabra@msu.edu', 'MSU');
    
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

// gets role from getRole()
test('gets role of employee', () => {
    const intern = new Intern('abe', 26, 'shawabra@msu.edu', 'MSU');

    expect(intern.getRole()).toEqual("Intern");
}); 



