
const Engineer = require('../lib/Engineer');

 
test('creates an Engineer object', () => {
    const engineer = new Engineer('abe', 26, 'shawabra@msu.edu');
    
    expect(engineer.github) .toEqual(expect.any(String));
});

test('gets engineer github value', () => {
    const engineer = new Engineer('abe', 26, 'shawabra@msu.edu', 'abeshaw97');

    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

// gets role from getRole() 
test('gets role of employee', () => {
    const engineer = new Engineer('abe', 26, 'shawabra@msu.edu', 'Engineer');

    expect(engineer.getRole()).toEqual("Engineer");
});
