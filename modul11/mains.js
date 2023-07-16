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
  
 function add(num1, num2) { 
    return num1 + num2;
};

function diff(num1, num2) { 
    return num1 - num2;
};

function calc(num1, num2, add) { // add это функция высшего порядка, которую можем использовать как аргумент.
	return add (num1, num2);
};

console.log (add(5, 6));
console.log (diff(50, 6));
console.log(calc(5, 6, add));
console.log(calc(50, 6, diff));

/*=====================================================*/
/*задача 4*/
 