// Exercise # 18
let tour: string[]= ["Swat","Kumrat","Delhi","Mumbai","Dhaka"];
console.log("original order ",tour);
//4Print in alphabetical order without changing the original one.
console.log("Alphabetical order ", [...tour].sort());
console.log("Confirming original ", tour);
console.log("Reverse alpha: order ", [...tour].sort().reverse());
console.log("Confirming original ", tour);
console.log("Reverse order ", tour.reverse());
console.log("Original order ", tour.reverse());
console.log("Alphabetical order ",tour.sort());
console.log("Reverse alpha: order ", tour.reverse());
