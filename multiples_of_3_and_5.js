var multiple = 0;
var sum = 0;

for(i=1; i<1000; i++) {
	if(i%3===0 || i%5===0) {
		multiple = i;
		sum += multiple;
	} else {
		multiple = 0;
	}
}

console.log("The sum of all multiples of 3 or 5 below 1000 is " \
	+ sum + ".");