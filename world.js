var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// Exercise # 18
var tour = ["Swat", "Kumrat", "Delhi", "Mumbai", "Dhaka"];
console.log("original order ", tour);
//4Print in alphabetical order without changing the original one.
console.log("Alphabetical order ", __spreadArray([], tour, true).sort());
console.log("Confirming original ", tour);
console.log("Reverse alpha: order ", __spreadArray([], tour, true).sort().reverse());
console.log("Confirming original ", tour);
console.log("Reverse order ", tour.reverse());
console.log("Original order ", tour.reverse());
console.log("Alphabetical order ", tour.sort());
console.log("Reverse alpha: order ", tour.reverse());
