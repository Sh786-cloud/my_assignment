// Exercise # 43
var magicians = ["Jay", "Munesh", "Ravi", "Kunal"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    var newMagicians = [];
    magicians.forEach(function (magician) { newMagicians.push("The Great ".concat(magician)); });
    return newMagicians;
}
var newMagicians = make_great(magicians.slice());
show_magicians(magicians);
show_magicians(newMagicians);
