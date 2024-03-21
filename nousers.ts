// Exercise # 31
let usernames : string[] = ["Azhar","Hadi Bux","Zain","Admin","Faraz"];
while(usernames.length > 0){
    usernames.pop();
};
/*usernames.pop();
usernames.shift();
usernames.pop();
usernames.shift();
usernames.pop();*/

if (usernames.length === 0) {
    console.log("We need to find some users!");
};