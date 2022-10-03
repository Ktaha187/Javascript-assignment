let name2 = "Taha";
console.log(name2.toUpperCase());
console.log(name2.toLowerCase());

let titlecase1 = name2.slice(0,1).toUpperCase();
let titlecase2 = name2.slice(1).toLowerCase();
let result = titlecase1 + titlecase2;
console.log(result)