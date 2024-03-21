// Exercise # 30
var usernames = ["Azhar", "Hadi Bux", "Zain", "Admin", "Faraz"];
usernames.forEach(function (user) {
    if (user === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(user, ", thank you for logging in again."));
    }
});
