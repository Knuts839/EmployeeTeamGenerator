const Intern = require("../lib/Intern");

test("Can set school via constructor", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue, "GitHubUser");
    expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = "Intern";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA", "GitHubUser");
    expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
    const testValue = "UCLA";
    const e = new Intern("Foo", 1, "test@test.com", testValue, "GitHubUser");
    expect(e.getSchool()).toBe(testValue);
});
test("Can set GitHUb account via constructor", () => {
    const testValue = "GitHubUser";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA", testValue);
    expect(e.github).toBe(testValue);
});
test("Can get GitHub username via getGithub()", () => {
    const testValue = "GitHubUser";
    const e = new Intern("Foo", 1, "test@test.com", "UCLA", testValue);
    expect(e.getGithub()).toBe(testValue);
});