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
// /*====================================================*/

// // задача 1
// let a = +prompt("введите число", "");
// if (typeof a !== 'number' || isNaN (a)){
// 	console.log ('упс, кажется, вы ошиблись');
//   }	if (num % 2){
// 			console.log(" чило-нечетное");
// 		} else {
// 			console.log(" чило-четное");
// 		}
	/*================================================*/

	// задача 5

	let arr = [];
while(arr.length < 5){
    let r = Math.floor(Math.random() * 8) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
arr.forEach((value, index) => {
	console.log(arr.slice(index, index+1));
});
/*========================================================*/