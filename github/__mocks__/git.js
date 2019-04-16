function git(username) {
    if (typeof (username) === "string") {

        filteredUsername = username.trim();
        if (filteredUsername.length === 0) {
            return "cannot be empty";
        } else {
            return Promise.resolve({
                repo: "bash"
            });
        }

    } else {
        return "not a string";
    }
}

module.exports = git;