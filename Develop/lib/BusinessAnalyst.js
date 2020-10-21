const Employee = require("./Employee");

class BusinessAnalyst extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        this.github = github;
    }

    getRole() {
        return "BusinessAnalyst";
    }

    getGithub() {
        return this.github;
    }

}

module.exports = BusinessAnalyst;