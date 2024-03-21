// Exercise # 38
function describe_city(city, country) {
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
describe_city("Hyderabad");
describe_city("Nawab Shah");
describe_city("Ahmedabad", "India");
