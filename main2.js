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

// 	let arr = [];
// while(arr.length < 5){
//     let r = Math.floor(Math.random() * 8) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr);
// arr.forEach((value, index) => {
// 	console.log(arr.slice(index, index+1));
// });
/*========================================================*/
// задача 6

// let first = [ 1, 2, 3, 4, 5 ];
// let second = [ 1, 2, 3, 4, 5 ];
// let arr = [];
// while(arr.length < 5){
//     let r = Math.floor(Math.random() * 8) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// console.log(arr)
// let three = first.toString() === second.toString();
// console.log(three);
// let arr2 = first.toString() === arr.toString();
// console.log(arr2);
/*==============================================================*/

//задача 7

// let arr = [];
// while(arr.length < 5){
// 	let r = Math.floor(Math.random() * 8) + 1;
//     if(arr.indexOf(r) === -1) arr.push(r);
// }
// let arr = [16, 2, 5, 8, 10];
// console.log(arr)
// function list (arr){
// let number2 = 0;
// let number1 = 0;
// for (let i=0; i < arr.length; i++){
// 	if (arr[i] % 2) {
// 		number1++;
// 	} else {
// 		number2++;
// 	}
// }
// return number1;
// return number2;
// console.log("количество четных элементов: " + number2);
// console.log("количество нечетных элементов: " + number1);
// }

/*=======================================================================*/

//задача 8

let map = {
	name : "Dmitrii",
	age: 26,
	growth: 193, 
}
console.log(map)
for (let key in map) {
    console.log(`ключ: ${key}, значение: ${map[key]}`);
}
/*==============================================================*/
