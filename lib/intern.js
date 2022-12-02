// Import Employee class
const Employee = require('./employee')

// Intern class
class Intern extends Employee {
    constructor(name, id, email, school){
        // Invoke Employee's constructors
        super(name, id, email);
        
        this.school = school;
    }
}

// Export Intern
module.exports = Intern;
