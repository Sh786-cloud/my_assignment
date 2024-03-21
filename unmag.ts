// Exercise # 43
let magicians : string[] = ["Jay","Munesh","Ravi","Kunal"];
function show_magicians(magicians){
    magicians.forEach(magician => console.log(magician));
}
function make_great(magicians: string[]): string[]{
    let newMagicians = [];
    magicians.forEach(magician => {newMagicians.push(`The Great ${magician}`)});
    return newMagicians;
}
let newMagicians = make_great(magicians.slice())
show_magicians(magicians);
show_magicians(newMagicians);
