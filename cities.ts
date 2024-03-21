// Exercise # 39
function city_country(city : string, country : string) : any {
    return `"${city}, ${country}"`;
}
let address : string = city_country("Islamabad","Pakistan");
console.log(address);

address = city_country("Makkah","Saudi Arabia");
console.log(address);

address = city_country("Mumbai","India");
console.log(address);