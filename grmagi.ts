// Exercise # 42
let magicians : string[] = ["Jay","Munesh","Ravi","Kunal"];
function show_magicians(magicians){
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians){
    let i = 0
    while ( i < 4){
        magicians[i] = "The Great "+ magicians[i];
        i++;
    }
}
make_great(magicians);
show_magicians(magicians);