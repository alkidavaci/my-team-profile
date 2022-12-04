// Import Employee class
const Employee = require('./employee')

// Engineer class
class Engineer extends Employee {
    constructor(name, id, email, gitHub){
        // Invoke Employee's constructors
        super(name, id, email);
        
        this.gitHub = gitHub;
    }
    //Method return gitHub from input
    getGitHub () {
        return this.gitHub;
    }
    //Overwrite method return title
    getRole() {
        return "Engineer";
    }
}

// Export Engineer
module.exports = Engineer;
