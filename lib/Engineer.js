const Employee = require('./Employee');

class Engineer extends Employee {
    super(name, id, email, github, role) {
        
        this.github = github;
        this.role = role;
    }

    getGithub() {
        return this.github;
    };
    getRole() {
        return 'Engineer';
    }

}

module.exports = Engineer;


