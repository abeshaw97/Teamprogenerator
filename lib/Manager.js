import Employee from './Employee';

class Manager extends Employee {
    constructor (name, id, email, officeNumber) {
        this.officeNumber = officeNumber; 
        super (name, id, email); 
    }
    getRole () {
        return "Manager";
    }
}

export default Manager; 