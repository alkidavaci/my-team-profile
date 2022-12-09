// Import Employee class
const Employee = require('./employee')

// Manager class
class Manager extends Employee {
    constructor(name, id, email, officeNumber){
        // Invoke Employee's constructors
        super(name, id, email);
        
        this.officeNumber = officeNumber;
    }
    //Method return office number from input
    getofficeNumber () {
        return this.officeNumber;
    }
    //Overwrite method return title
    getRole() {
        return "Manager";
    }
}

// Export Manager
module.exports = Manager;