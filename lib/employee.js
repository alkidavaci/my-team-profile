// Employee class
class Employee {
    constructor(name, id, email){
       this.name = name;
       this.id = id;
       this.email = email;
    }
    //Method return name from input
    getName () {
        return this.name;
    }
    //Method return id from input
    getId () {
        return this.id;
    }
    //Method return email from input
    getEmail () {
        return this.email;
    }
    //Method return title
    getRole() {
        return "Employee";
    }

}
// Export employee
module.exports = Employee;