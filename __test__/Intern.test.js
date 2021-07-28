test('creates a new Intern'), () => {
   
    const Employee(new Employee('Adam', 'Intern', 'AdamTesta@gmail.com', '135904', 'Algonquin College'));

expect(Employee.name).toBe('Adam');
expect(Employee.role).toBe('Intern');
expect(Employee.email).toBe('AdamTesta@gmail.com');
expect(Employee.id).toBe('135904');
expect(Employee.school).toBe('Algonquin College');
});