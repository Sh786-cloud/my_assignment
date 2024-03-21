// Exercise # 37
function large_shirt(size, message) {
    if (size === void 0) { size = "LARGE"; }
    if (message === void 0) { message = "I love TypeScript."; }
    var print = "This is a ".concat(size, " size shirt & ").concat(message);
    console.log(print);
}
large_shirt();
function medium_shirt(size, message) {
    if (size === void 0) { size = "MEDIUM"; }
    if (message === void 0) { message = "I love TypeScript."; }
    var print = "This is a ".concat(size, " size shirt & ").concat(message);
    console.log(print);
}
medium_shirt();
function extralarge_shirt(size, message) {
    if (size === void 0) { size = "Extra-LARGE"; }
    if (message === void 0) { message = "I love Ramadan."; }
    var print = "This is a ".concat(size, " size shirt & ").concat(message);
    console.log(print);
}
extralarge_shirt();
