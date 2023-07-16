 let num1 = +prompt("введите число до 1000", "");
 if (num1 < 1000){ 
	function isPrime(num) {
	for (let i = 2; i < num; i++) {
	  if (num % i === 0) return false;
	}
	return num !== 1;
  }
   isPrime(num=num1);
   console.log(num);
   console.log(isPrime(num));
 } else{
	alert('слишком большое число');
  } 
 if((isPrime(num)) == true ){
	console.log(num + " простое число ");
 } else {
	console.log(num + " составное число ");
 }
 
