// Exercise # 32
let current_users : string[] = ["Azhar","Hadi Bux","Zain","Admin","Faraz"];
let new_users : string[] = ["Ghazanfar","Admin","Ismail","hadi bux","Kamil"];
new_users.forEach(newUser => {if(current_users.some(currentUser => currentUser.toUpperCase()=== newUser.toUpperCase())){
    console.log(`The person ${newUser} will need to enter a new username.`);
}else{
    console.log("The username is available.");
}});
