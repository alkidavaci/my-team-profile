// Import Employee class
const Employee = require('./employee')

// Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNum){
        // Invoke Employee's constructors
        super(name, id, email);
        
        this.officeNum = officeNum;
    }
    //Method return office number from input
    getOfficeNum () {
        return this.officeNum;
    }
    //Overwrite method return title
    getRole() {
        return "Manager";
    }
}

// Export Manager
module.exports = Manager;