var fib = 1;
var f1 = 1;
var f2 = 1;
var sum = 0;

for(fib=1; fib<4000000; fib) {
	console.log(fib);
	if(fib%2===0) {
		sum += fib;
	}
	fib = f1 + f2;
	f2 = f1;
	f1 = fib;
}

console.log("The sum of all even Fibonacci numbers less than 4,000,000 is " + sum + ".");