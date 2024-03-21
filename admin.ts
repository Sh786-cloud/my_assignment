// Exercise # 30
let usernames : string[] = ["Azhar","Hadi Bux","Zain","Admin","Faraz"];
usernames.forEach(user => {if (user === "Admin"){
    console.log("Hello Admin, would you like to see a status report?");
} else{
    console.log(`Hello ${user}, thank you for logging in again.`)
}});