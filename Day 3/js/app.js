// var a = 1;
// var b = 2;
// var c = 3;

// let myArr = ["DG UZ", "Tashkent", "UZB"];
// console.log(myArr);

// let brands = ["Facebook", "Google", true, 25, "GDY"];
// document.getElementById("test").innerHTML = brands;

/**ARRAY METHODS */

/**pop metodi arrayning oxirgi qatoridagi qiymatni o'chiradi */
let items = ["Olcha", "Banan", "Mango", "Kiwi"];
let item = items.pop();

console.log(items)

/**push metodi arrayning oxirgi qatoridan qiymat qo'shadi */
let techs = ["Razer", "ASUS", "QWERTY"];
var laptop = techs.push("Apple")

console.log(techs)

/**shift arrayning boshidan qiymatni o'chriadi*/

// let colors = ["Red", "Yellow", "Green"];
// let removeFirst = colors.shift();

// console.log(colors)

/**unshift arrayning boshidan qiymatni qo'shadi */

let colors2 = ["Red", "Yellow", "Green"];
let addFirst = colors2.unshift("Blue");

console.log(colors2)

/**lengths array lengthini aniqlab yangi qiymat qo'shamiz */

let airplanes = ["AIRBUS", "Boieng", "IL-75"];
airplanes[airplanes.length] = "JET PLUS";

console.log(airplanes)