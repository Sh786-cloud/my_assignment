// Exercise # 39
function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
var address = city_country("Islamabad", "Pakistan");
console.log(address);
address = city_country("Makkah", "Saudi Arabia");
console.log(address);
address = city_country("Mumbai", "India");
console.log(address);
