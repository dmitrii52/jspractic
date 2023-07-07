// /*задача 2*/

let x = prompt("введите значение", "");
switch(typeof (x)) {
	case "string":
	console.log("x-строка ");
	break;
	case "number":
		console.log("x-число");
		break;
	case "boolean":
		console.log("x-логическое ");
		break;
	default:
		console.log("тип неизвестен ");
}
/*====================================================*/

// задача 1
let a = +prompt("введите число", "");
let num = a;
if (typeof a !== 'number' || isNaN (a)){
	console.log ('упс, кажется, вы ошиблись');
  }	if (num % 2){
			console.log(" чило-нечетное");
		} else {
			console.log(" чило-четное");
		}
	