// Exercise # 15
var guest = ["Nadeem", "Ashraf", "Wahab", "Anwar"];
//guest.forEach(guests => console.log(`Hi ${guests} you are cordially invited to dinner with me.`));
console.log("Due to an emergency ".concat(guest[0], " can't make it."));
//guest[0]= "Jay Kumar" OR
guest.splice(0, 1, "Jay Kumar");
guest.forEach(function (guests) { return console.log("Hi ".concat(guests, ", you are cordially invited to  have dinner with me.")); });
