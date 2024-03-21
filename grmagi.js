// Exercise # 42
var magicians = ["Jay", "Munesh", "Ravi", "Kunal"];
function show_magicians(magicians) {
    magicians.forEach(function (magician) { return console.log(magician); });
}
function make_great(magicians) {
    var i = 0;
    while (i < 4) {
        magicians[i] = "The Great " + magicians[i];
        i++;
    }
}
make_great(magicians);
show_magicians(magicians);
