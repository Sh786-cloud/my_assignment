// Exercise # 40
function make_album (artist : string, title : string, tracks? : number){
    let album = {artist, title};
    if (tracks){
        album['tracks'] = tracks;
    }
    return album
}
console.log(make_album("Irfan","Raw Mill"));
console.log(make_album("Syed Zain","Pyro Processing"));
console.log(make_album("Hfiz Usama","Cement Mills",1235));
