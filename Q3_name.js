//Exercise # 03
var x = "Nadeem Chaudhary";
console.log(x.toLowerCase());
console.log(x.toUpperCase());
console.log(x.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
