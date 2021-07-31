const Employee = require('../lib/Employee')


test('creates a new Employee'), () => {
    const Employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');

expect(Employee.name).toEqual(expect.any(String))
expect(Employee.role).toBe('Employee');
expect(Employee.email).toEqual(expect.any(String))
expect(Employee.id).toEqual(expect.any(Number));
};

// test('get employees name'), () => {
//     const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
    
//     expect(employee.name).toEqual(expect.any(String))
// };

// test('get employees role'), () => {
//     const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
//     expect(employee.getRole()).toBe('Employee');
// };

// test('get employees email'), () => {
//     const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
//     expect(employee.getEmail()).toBe('lakynmphotography@hotmail.com');
// };

// test('get employees id'), () => {
//     const employee = new Employee('Lakyn', 'Employee', 'lakynmphotography@hotmail.com', '135634');
//     expect(employee.getId()).toBe('135634');
//     // expect(employee.id).toEqual(expect.any(Number));
// };
