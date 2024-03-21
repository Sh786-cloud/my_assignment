// Exercise # 16
var guest = ["Nadeem", "Ashraf", "Wahab", "Anwar"];
//guest.forEach(guests => console.log(`Hi ${guests} you are cordially invited to dinner with me.`));
//console.log(`Due to an emergency ${guest[0]} can't make it.`)
//guest[0]= "Jay Kumar" OR
//guest.splice(0,1,"Jay Kumar");
//guest.forEach(guests => console.log(`Hi ${guests}, you are cordially invited to  have dinner with me.`));
console.log("All of you informed that I have found a bigger dinner table!");
guest.unshift("Jazy");
guest.splice(3, 0, "Shakir");
guest.push("Yasir");
guest.forEach(function (guests) { return console.log("Hi ".concat(guests, ", you are cordially invited to have dinner with me.")); });
