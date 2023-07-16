
/*задача 1*/
// let arr = [0,1,2,3, true, null];
// let even =0;
// let add = 0;
// let zero = 0;
// arr.forEach((item) =>{
// 	if (typeof item === "number" && !isNaN(item)) {
// 		if (item === 0) {
// 			zero++
// 		} else if (item % 2 === 0) {
// 			even++;
// 		} else {
// 			add++;
// 		}
// 	}
// })
// console.log("четных  значений: " + even);
// console.log("нечетных  значений: " + add);
// console.log("нулевых  значений: " + zero);

/*задача 2*/
//  let num1 = +prompt("введите число до 1000", "");
//  if (num1 < 1000){ 
// 	function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 	  if (num % i === 0) return false;
// 	}
// 	return num !== 1;
//   }
//    isPrime(num=num1);
//    console.log(num);
//    console.log(isPrime(num));
//  } else{
// 	alert('слишком большое число');
//   } 
//  if((isPrime(num)) == true ){
// 	console.log(num + " простое число ");
//  } else {
// 	console.log(num + " составное число ");
//  }
 /*===============================================================*/

 /*задача 3 модуль 11*/
  
//  function add(num1, num2) { 
//     return num1 + num2;
// };

// function diff(num1, num2) { 
//     return num1 - num2;
// };

// function calc(num1, num2, add) { // add это функция высшего порядка, которую можем использовать как аргумент.
// 	return add (num1, num2);
// };

// console.log (add(5, 6));
// console.log (diff(50, 6));
// console.log(calc(5, 6, add));
// console.log(calc(50, 6, diff));

/*=====================================================*/
/*задача 4*/

// function delay(number1, number2) {
// 	console.log("первое число:" + number1);
// 	console.log("второе число: " + number2);
// 	let stopInterval = setInterval(() => {
// 		number1++;
// 		if(number1 === number2){
// 		clearInterval(stopInterval)
// 		}
// 		console.log(number1)
// 	},1000);
// }
// delay(1, 10);
/*задача 5*/

// function square (x, n) {
// 	return Math.pow(x, n);
// }
// console.log(square(3, 2));


// /*стрелочная функция*/
// let square1 = (x, n) => Math.pow(x, n);
// console.log(square1(5, 2));