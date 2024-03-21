// Exercise # 45
function cars (manufacturer: string, model : string, ...optional: [string, any][]): object {
    let car = {manufacturer, model};
    optional.forEach(([key, value]) => car[key] = value);
    return car;
}
console.log(cars("Suzuki","Cultus",["Colour","White"],["year", 2022]));
console.log(cars("Toyota","Fortuner",["Colour","Black"],["Transmission","Auto"]));

