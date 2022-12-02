// Import Employee class
const Employee = require('./employee')

// Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNum){
        // Invoke Employee's constructors
        super(name, id, email);
        
        this.officeNum = officeNum;
    }
}

// Export Manager
module.exports = Manager;