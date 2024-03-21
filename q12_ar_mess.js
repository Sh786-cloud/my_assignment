// Exercise # 12
var names = ["Wahab", "Nadeem", "Ashraf", "Christina"];
//console.log("Hi "+names[0]+", plant is running in optimized condition.")
//console.log("Hi "+names[1]+", plant is running in optimized condition.")
//console.log("Hi "+names[2]+", plant is running in optimized condition.")
//console.log("Hi "+names[3]+", plant is running in optimized condition.")
//names.forEach(friends => console.log("Hi "+friends+" , plant is running in optimized condition."))
names.forEach(function (friend) { return console.log("Hi ".concat(friend, ", plant is running in optimized condition.")); });
