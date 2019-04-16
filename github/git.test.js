jest.mock("./git.js");
git = require("./git.js");
test(`expect git("wolfman360") to return "bash"`, () => {
    git("wolfman").then(repo => {
        expect(repo).toBe("bash");
    });

});
test("expect git() to return not a string ", () => {
    expect(git()).toBe("not a string");
});
test("expect git(true) to return not a string ", () => {
    expect(git(true)).toBe("not a string");
});
test("expect git(null) to return not a string ", () => {
    expect(git(null)).toBe("not a string");
});
test("expect git(undefined) to return not a string ", () => {
    expect(git(undefined)).toBe("not a string");
});
test("expect git() to return not a string ", () => {
    expect(git(Infinity)).toBe("not a string");
});
test("expect git(1234) to return not a string ", () => {
    expect(git(1234)).toBe("not a string");
});
test("expect git() to return data ", () => {
    expect(git("")).toBe("cannot be empty");
});