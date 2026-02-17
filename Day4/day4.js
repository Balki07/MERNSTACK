console.log("SECTION 1: VARIABLES & ASSIGNMENT");
let name = "Balaganesh";
let age = 20;
let isStudent = true;
console.log("Name:", name);
console.log("Age:", age);
console.log("Is Student:", isStudent);
let a = 10;
let b = 20;
a = a + b;
b = a - b;
a = a - b;
console.log("After Swap: a =", a, "b =", b);
let x = 10;
let y = x;
y = 20;
console.log("Value of x:", x);
const pi = 3.14;
const radius = 5;
const area = pi * radius * radius;
console.log("Area:", area);
console.log("\nSECTION 2: OPERATORS");
let n1 = 10;
let n2 = 5;
console.log("Sum:", n1 + n2);
console.log("Difference:", n1 - n2);
console.log("Product:", n1 * n2);
console.log("Quotient:", n1 / n2);
console.log("Remainder:", n1 % n2);
console.log("5 + '5' =", 5 + "5");
console.log("5 - '2' =", 5 - "2");
console.log("true + 1 =", true + 1);
let num1 = 120;
if (num1 > 100) {
  console.log("Greater than 100");
}
else if (num1 === 100) {
  console.log("Equal to 100");
}
else {
  console.log("Less than 100");
}
console.log("5 == '5' :", 5 == "5");
console.log("5 === '5' :", 5 === "5");
let ageCheck = 25;
if (ageCheck >= 18 && ageCheck <= 60) {
  console.log("Eligible");
} else {
  console.log("Not Eligible");
}
console.log("\nSECTION 3: CONTROL STATEMENTS");
let num2 = 7;
if (num2 % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
let num3 = 15;
if (num3 % 3 === 0 && num3 % 5 === 0) {
  console.log("FizzBuzz");
}
else if (num3 % 3 === 0) {
  console.log("Fizz");
}
else if (num3 % 5 === 0) {
  console.log("Buzz");
}
else {
  console.log(num3);
}
let day = 3;
switch (day) {
  case 1: console.log("Monday"); break;
  case 2: console.log("Tuesday"); break;
  case 3: console.log("Wednesday"); break;
  case 4: console.log("Thursday"); break;
  case 5: console.log("Friday"); break;
  case 6: console.log("Saturday"); break;
  case 7: console.log("Sunday"); break;
  default: console.log("Invalid");
}
console.log("1 to 20:");
for (let i = 1; i <= 20; i++) {
  console.log(i);
}
console.log("Even Numbers:");
for (let i = 2; i <= 20; i += 2) {
  console.log(i);
}
let N = 5;
let i = 1;
let sum = 0;
while (i <= N) {
  sum += i;
  i++;
}
console.log("Sum 1 to", N, "=", sum);
console.log("Break & Continue:");
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }

  if (i === 8) {
    break;
  }
  console.log(i);
}
console.log("\nSECTION 4: FUNCTIONS");
function add(a, b) {
  return a + b;
}
console.log("Add:", add(5, 3));
const addArrow = (a, b) => a + b;
console.log("Add Arrow:", addArrow(5, 3));
function isPrime(n) {
  if (n <= 1) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
console.log("Is 7 Prime?", isPrime(7));
function reverse(str) {
  return str.split("").reverse().join("");
}
console.log("Reverse:", reverse("hello"));
function test() {
  return;
  console.log("Hello");
}
test();
function largest(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }

  return max;
}
console.log("Largest:", largest([5, 2, 9, 3]));
console.log("\nSECTION 5: INTEGRATED PROGRAM");
function getGrade(mark) {

  if (mark >= 90) {
    return "A";
  }
  else if (mark >= 75) {
    return "B";
  }
  else if (mark >= 50) {
    return "C";
  }
  else {
    return "Fail";
  }
}
let studentName = "Balaganesh";
let marks = 82;
let grade = getGrade(marks);
console.log("Name:", studentName);
console.log("Marks:", marks);
console.log("Grade:", grade);

