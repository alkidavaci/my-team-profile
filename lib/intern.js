// Import Employee class
const Employee = require('./employee')

// Intern class
class Intern extends Employee {
    constructor(name, id, email, school){
        // Invoke Employee's constructors
        super(name, id, email);
        
        this.school = school;
    }
    //Method return school from input
    getSchool () {
        return this.school;
    }
    //Overwrite method return title
    getRole() {
        return "Intern";
    }
}

// Export Intern
module.exports = Intern;
