test('creates a new Engineer'), () => {
    const Employee(new Employee('Antony', 'Engineer', 'anthony.eryk@gmail.com', '135684', 'github@AntonyD'));

expect(Employee.name).toBe('Antony');
expect(Employee.role).toBe('Engineer');
expect(Employee.email).toBe('anthony.eryk@gmail.com');
expect(Employee.id).toBe('135684');
expect(Employee.github).toBe('github@AntonyD');
});