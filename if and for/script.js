// task 1
let result = "";
var i = 0;
for (i = 1; i <= 10; i++) {
    result += i + " ";
}
console.log(result);


//task 2
result = "";
i = 1;
while (i <= 10) {
    result += i + " ";
    i += 1;
}
console.log(result);


//task 3
result = "";
i = 1;
for (i = 0; i <= 10; i += 2) {
    result += i + " ";
}
console.log(result);


//task 4
let sum = 0;
i = 1;
for (i; i <= 10; i++) {
    sum += i;
}
console.log(sum);


//task 5
result = "";
i = 1;
for (i; i <= 10; i += 2) {
    result += i + " ";
}
console.log(result);


//task 6
let age = Number(prompt("enter your age please "));
if (age > 16)  console.log("you are an adult");
else  console.log("you are baby");
   

//task 7 
let score = Number(prompt("enter your score please "));
if (score <= 50)  console.log("you failed the test");
else  console.log("you are pass the test");
   

//task 8
let Name = prompt("enter your name");
if (Name == "John") console.log("Hello " + Name);
else console.log("I miss you John");


//task 9
let day = prompt("enter day name ");
if (day != "friday" && day != "saturday") console.log("it is a weekday");
else console.log("it is weekend");


//task 10
let num = Number(prompt("enter a number "));
if (num % 2 == 0) console.log("the number is even");
else console.log("the number is odd ");


//task 11 + 12 
let num2 = Number(prompt("enter a nubmer "));
if (num2 >= 0) console.log(`${num2} is a positive number`);
else console.log(`${num2} is a negative number`);

//taks 13
let gpa = Number(prompt("enter your gpa please "));
if (gpa > 3.0) console.log("Congratulations, you have a good GPA!");
else console.log("stady more please ");

//task 14 
i = 2;
let isprime = true;
let num3 = Number(prompt("please enter a positive number "));
for (i; i <= Math.round(num3 / 2); i++) {
    if (num3 % i == 0) {
        isprime = false;
        break;
    }
}
if (isprime && num3 != 1) console.log(true);
else console.log(false);








