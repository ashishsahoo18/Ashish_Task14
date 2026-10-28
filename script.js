// ─── Different variables for each check ───
var number = 153;      // main number used for digits, prime, factors, Armstrong
var n = 10;            // n for "sum of first n numbers"
var tableNumber = 5;   // n for "print table of n"

console.log("Number :- " + number);
console.log("-----------------------------");


// 1. Sum of first n numbers
var sumOfN = 0;
for (var i = 1; i <= n; i++) {
  sumOfN = sumOfN + i;
}
console.log("Sum of first " + n + " numbers: " + sumOfN);
console.log("-----------------------------");


// 2. Table of n
console.log("Table of " + tableNumber + ":");
for (var j = 1; j <= 10; j++) {
  console.log(tableNumber + " x " + j + " = " + tableNumber * j);
}
console.log("-----------------------------");


// 3. Sum of all digits of a number (139 => 1 + 3 + 9 = 13)
var digitSum = 0;
var tempDigits = number;
while (tempDigits > 0) {
  var digit = tempDigits % 10;          // get last digit
  digitSum = digitSum + digit;
  tempDigits = Math.floor(tempDigits / 10); // remove last digit
}
console.log("Sum of its digits: " + digitSum);


// 4. Check if it is an Armstrong number (sum of digits^3 = number)
var armstrongSum = 0;
var tempArmstrong = number;
while (tempArmstrong > 0) {
  var lastDigit = tempArmstrong % 10;
  armstrongSum = armstrongSum + lastDigit * lastDigit * lastDigit;
  tempArmstrong = Math.floor(tempArmstrong / 10);
}

if (armstrongSum === number) {
  console.log("Is it an Armstrong number? Yes");
} else {
  console.log("Is it an Armstrong number? No");
}


// 5. Check if it is a prime number
var isPrime = true;
if (number < 2) {
  isPrime = false;
}
for (var k = 2; k < number; k++) {
  if (number % k === 0) {
    isPrime = false;
    break;               // stop as soon as a divisor is found
  }
}

if (isPrime) {
  console.log("Is it a prime number? Yes");
} else {
  console.log("Is it a prime number? No");
}


// 6. Print all its factors
var factors = "";
for (var f = 1; f <= number; f++) {
  if (number % f === 0) {
    if (factors !== "") {
      factors = factors + ", ";
    }
    factors = factors + f;
  }
}
console.log("Factors: " + factors);