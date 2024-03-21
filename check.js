// Exercise # 32
var current_users = ["Azhar", "Hadi Bux", "Zain", "Admin", "Faraz"];
var new_users = ["Ghazanfar", "Admin", "Ismail", "hadi bux", "Kamil"];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toUpperCase() === newUser.toUpperCase(); })) {
        console.log("The person ".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("The username is available.");
    }
});
