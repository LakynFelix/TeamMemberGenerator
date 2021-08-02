const Intern = require('../lib/Intern');

test('creates a new Intern', () => {
    const school = 'Algonquin college';
   
    const intern = new Intern('Adam', '135904' ,'AdamTesta@gmail.com', school);

expect(intern.getRole()).toBe('Intern');
expect(intern.school).toBe(school);
expect(intern.getSchool()).toBe(school);

});