const Engineer = require('../lib/Engineer');

test('creates a new Engineer', () => {
    const github = "git@github";
    const engineer = new Engineer('Antony', '135684','anthony.eryk@gmail.com',github);


expect(engineer.getRole()).toBe('Engineer');
expect(engineer.getGithub()).toBe(github);
expect(engineer.github).toBe(github);

});