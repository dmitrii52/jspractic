задание 3 готово
let a = prompt("напишите слово", "");
let reverse = a.split("").reverse().join("");
let element = document.querySelector("div");
element.innerHTML = `ваше слово ${a}: наоборот ${reverse}`;
alert(`ваше слово ${a} наоборот ${reverse}`);

/*====================================================================*/

/*задание номер 4*/

let number = Math.round(Math.random()*100+1); // ROUND - округление до целого числа
console.log(number);