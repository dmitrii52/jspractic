// /*задача 2*/

// let x = prompt("введите значение", "");
// switch(typeof (x)) {
// 	case "string":
// 	console.log("x-строка ");
// 	break;
// 	case "number":
// 		console.log("x-число");
// 		break;
// 	case "boolean":
// 		console.log("x-логическое ");
// 		break;
// 	default:
// 		console.log("тип неизвестен ");
// }

/*===============================================*/

let x = prompt("введите значение", "");
let b = typeof x;
console.log(b)
if (b === string) {
	console.log("x-строка ");
}else if (b === number) {
	console.log("x-число ");
} else {
	console.log("неизвестный тип данных ");
}
	