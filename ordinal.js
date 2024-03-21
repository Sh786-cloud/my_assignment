// Exercise # 33
var count = [1, 2, 3, 4, 5, 6, 7, 8, 9];
count.forEach(function (numb) {
    if (numb == 1) {
        console.log(numb + "st");
    }
    else if (numb == 2) {
        console.log(numb + "nd");
    }
    else if (numb == 3) {
        console.log(numb + "rd");
    }
    else {
        console.log(numb + "th");
    }
});
