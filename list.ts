// Exercise # 15
let guest = ["Nadeem","Ashraf","Wahab", "Anwar"];
//guest.forEach(guests => console.log(`Hi ${guests} you are cordially invited to dinner with me.`));
console.log(`Due to an emergency ${guest[0]} can't make it.`)
//guest[0]= "Jay Kumar" OR
guest.splice(0,1,"Jay Kumar");
guest.forEach(guests => console.log(`Hi ${guests}, you are cordially invited to  have dinner with me.`));