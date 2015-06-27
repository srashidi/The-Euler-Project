var number = prompt("Give me a number.");
var factor = number;
var primefactor = 1;

if(isNaN(number)) {
	console.log("That's not a number. Try running the program again.");
} else {
 
for(i=factor-1;i>0;i--) {
	if(factor%i===0) {
		factor = i;
		for(j=factor-1;j>1;j--) {
			if(factor%j===0) {
				factor = j;
				continue;
			}
		}
		break;
	}
}


var primefactor = factor;

console.log("The largest prime factor of " + number + " is " + primefactor + ".");

}