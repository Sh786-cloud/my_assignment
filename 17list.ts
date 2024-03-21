// Exercise # 17
let guest = ["Nadeem","Ashraf","Wahab", "Anwar"];
//guest.forEach(guests => console.log(`Hi ${guests} you are cordially invited to dinner with me.`));
//console.log(`Due to an emergency ${guest[0]} can't make it.`)
//guest[0]= "Jay Kumar" OR
//guest.splice(0,1,"Jay Kumar");
//guest.forEach(guests => console.log(`Hi ${guests}, you are cordially invited to  have dinner with me.`));
//console.log("All of you informed that I have found a bigger dinner table!")
//guest.unshift("Jazy");
//guest.splice(3,0,"Shakir");
//guest.push("Yasir");
//guest.forEach(guests => console.log(`Hi ${guests}, you are still invited.`));
console.log("Due to some management issues I can invite only two people for dinner");
while(guest.length >2){
    let shrinkguest = guest.pop();
    console.log(`I'm sorry ${shrinkguest}, I can't invite you.`)
};
guest.forEach(guests2 => console.log(`Hi ${guests2}, you are still invited.`));
guest.pop();
guest.pop();
console.log("Emptylist "+ guest);