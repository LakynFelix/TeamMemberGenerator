const Manager = require('../lib/Manager');

test('creates a new Manager', () => {
    const officeNumber = '1';

    const manager = new Manager('Samantha', '135624','sams@gmail.com' , officeNumber);


expect(manager.getRole()).toBe('Manager');
expect(manager.officeNumber).toBe(officeNumber);
expect(manager.getOfficeNumber()).toBe(officeNumber);

});