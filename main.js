// задание 3 готово
let a = prompt("напишите слово", "");
let reverse = a.split("").reverse().join("");
let element = document.querySelector("div");
element.innerHTML = `ваше слово ${a}: наоборот ${reverse}`;
alert(`ваше слово ${a} наоборот ${reverse}`);

/*====================================================================*/

