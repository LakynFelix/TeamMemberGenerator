const Employee = require('../lib/Employee')

test('creates a new Employee'), () => {
    const Employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');

expect(Employee.name).toBe('Lakyn');
expect(Employee.role).toBe('Employee');
expect(Employee.email).toBe('lakynmphotography@hotmail.com');
expect(Employee.id).toBe('135634');
};

test('get employees name'), () => {
    const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
    expect(employee.getName()).toBe('Lakyn');
};

test('get employees role'), () => {
    const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
    expect(employee.getRole()).toBe('Employee');
};

test('get employees email'), () => {
    const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
    expect(employee.getEmail()).toBe('lakynmphotography@hotmail.com');
};

test('get employees id'), () => {
    const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
    expect(employee.getId()).toBe('135634');
};
