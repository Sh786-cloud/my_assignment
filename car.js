// Exercise # 45
function cars(manufacturer, model) {
    var optional = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        optional[_i - 2] = arguments[_i];
    }
    var car = { manufacturer: manufacturer, model: model };
    optional.forEach(function (_a) {
        var key = _a[0], value = _a[1];
        return car[key] = value;
    });
    return car;
}
console.log(cars("Suzuki", "Cultus", ["Colour", "White"], ["year", 2022]));
console.log(cars("Toyota", "Fortuner", ["Colour", "Black"], ["Transmission", "Auto"]));
