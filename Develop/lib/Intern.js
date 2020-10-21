// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Intern extends Employee {
    constructor(name, id, email, school, github) {
        super(name, id, email);
        this.school = school;
        this.github = github;
    }

    getRole() {
        return "Intern";
    }

    getSchool() {
        return this.school;
    }
    getGithub() {
        return this.github;
    }

}

module.exports = Intern;