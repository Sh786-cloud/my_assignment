// Exercise # 44
function sandwich (...additems: string []){
    console.log("This is a very spicy sandwich prepared with " + additems.join());
}
sandwich("bread","egg","mayonese");
sandwich("onion","mustard","tomatoes","chillies");
sandwich("garlic","cheese");
