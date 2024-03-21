// Exercise # 44
function sandwich() {
    var additems = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        additems[_i] = arguments[_i];
    }
    console.log("This is a very spicy sandwich prepared with " + additems.join());
}
sandwich("bread", "egg", "mayonese");
sandwich("onion", "mustard", "tomatoes", "chillies");
sandwich("garlic", "cheese");
