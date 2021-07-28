const Employee = require('../lib/Employee')

test('creates a new Employee'), () => {
    const Employee(new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634'));

expect(Employee.name).toBe('Lakyn');
expect(Employee.role).toBe('Employee');
expect(Employee.email).toBe('lakynmphotography@hotmail.com');
expect(Employee.phone).toBe('135634');
});
