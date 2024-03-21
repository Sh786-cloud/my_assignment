// Exercise # 24
// String equality and inequality
var operator = "Ghazanfar";
console.log("Is operator == 'Ghazanfar'? I predict true.");
console.log(operator == "Ghazanfar");
console.log("Is operator == 'GHAZANFAR'? I predict false.");
console.log(operator == "GHAZANFAR");
console.log("Is operator !== 'GHAZANFAR'? I predict true.");
console.log(operator !== "GHAZANFAR");
console.log("Is operator !== 'Ghazanfar'? I predict false.");
console.log(operator !== "Ghazanfar");
//LowerCaseFunction
console.log("Is operator.toLowerCase() == 'ghazanfar'? I predict true.");
console.log(operator.toLowerCase() == "ghazanfar");
console.log("Is operator.toLowerCase() == 'Ghazanfar'? I predict false.");
console.log(operator.toLowerCase() == "Ghazanfar");
//Numerical Tests
var s = 786;
//Equality ==
console.log("Is s == '786'? I predict true.");
console.log(s == 786);
console.log("Is s == '486'? I predict false.");
console.log(s == 486);
//Inequality !==
console.log("Is s !== '486'? I predict true.");
console.log(s !== 486);
console.log("Is s !== '786'? I predict false.");
console.log(s !== 786);
//Greater than >
console.log("Is s > '486'? I predict true.");
console.log(s > 486);
console.log("Is s > '986'? I predict false.");
console.log(s > 986);
//Less than <
console.log("Is s < '986'? I predict true.");
console.log(s < 986);
console.log("Is s < '486'? I predict false.");
console.log(s < 486);
//Greater than or equal to >=
console.log("Is s >= '486'? I predict true.");
console.log(s >= 486);
console.log("Is s >= '986'? I predict false.");
console.log(s >= 986);
//Less than or equal to <=
console.log("Is s <= '986'? I predict true.");
console.log(s <= 986);
console.log("Is s <= '486'? I predict false.");
console.log(s <= 486);
//Logical &&(and) and ||(or) operators
console.log("Is (s <= '986')&&(s < '886')? I predict true.");
console.log((s <= 986) && (s < 886));
console.log("Is (s <= '986')&&(s < '486')? I predict false.");
console.log((s <= 986) && (s < 486));
console.log("Is (s <= '986')||(s < '486')? I predict true.");
console.log((s <= 986) || (s < 486));
console.log("Is (s >= '986')||(s < '486')? I predict false.");
console.log((s >= 986) || (s < 486));
var DCL = ["Admin", "HR", "Production", "Despatch"];
//test whether an item is in a array
console.log("Is 'HR' in DCL? I predict true.");
console.log(DCL.includes("HR"));
console.log("Is 'Civil' in DCL? I predict false.");
console.log(DCL.includes("Civil"));
//test whether an item is not in a array
console.log("Is 'Auto Workshop' not in DCL? I predict true.");
console.log(!DCL.includes("Auto Workshop"));
console.log("Is 'Admin' not in DCL? I predict false.");
console.log(!DCL.includes("Admin"));
