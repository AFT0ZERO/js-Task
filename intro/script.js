// task 1
let cash = revenues =profit= 1000, liabilties = expenses=equity=sales = 500;
console.log(cash/liabilties);
console.log(revenues-expenses);

liabilties=1000;

console.log(liabilties+equity);
console.log(profit*sales);

console.log((7+9+2)/3);
console.log(150-(150*0.3));

let age=20;
if(age<30 && age>=18)
    {
        console.log(true);
    }

// task 2 
console.log(typeof(100));//number
console.log(typeof(73.9));//number
console.log(typeof(NaN));//number
console.log(typeof("Water"));//string
console.log(typeof(false));//boolean
console.log(typeof(9!=11));//boolean
console.log("orang"+"e");//orange
console.log("orange"+"s");//oranges
console.log("4" + "8");//"48"
console.log("4" - "8");//-4
console.log("name" + 3);//name3
console.log("name" - 3);//NaN
console.log(82 * "word");//NaN
console.log(1 + "hello");//1hello
console.log("hello" + 1);//hello1
console.log(1 + true);//2
console.log("hello" + true);//hellotrue
console.log(typeof(Infinity));//number
console.log(1 == '1');//true
console.log(1 === '1');//false

//task 3
let word  = "Welcome to Orange";
console.log(word.toUpperCase());
console.log(word.substring(8, 10));
console.log(word.replace("Welcome to", "Hello from"));
console.log(word.toLowerCase());
console.log(word.length);
console.log(word.replace("Orange", '"Orange"'));
console.log(word + " Jordan");

//task4
// window.alert("welcome");

//task 5
let str1 = "Hello";
let str2 = "World";
let str3 = "JavaScript";
let str4 = "Variables";
let str5 = "Example";

let num1 = 10;
let num2 = 20.5;
let num3 = -30;
let num4 = 0;
let num5 = 1000000;

let bool1 = true;
let bool2 = false;
let bool3 = true;
let bool4 = false;
let bool5 = true;

let arr1 = [1, 2, 3];
let arr2 = ["a", "b", "c"];
let arr3 = [true, false, true];
let arr4 = [null, undefined, NaN];
let arr5 = [{}, [], "string"];

let obj1 = {name: "John", age: 30};
let obj2 = {title: "Developer", skills: ["JavaScript", "React"]};
let obj3 = {isActive: true, roles: ["Admin", "User"]};
let obj4 = {price: 19.99, inStock: false};
let obj5 = {x: 10, y: 20, z: 30};

console.log(str1, str2, str3, str4, str5);
console.log(num1, num2, num3, num4, num5);
console.log(bool1, bool2, bool3, bool4, bool5);
console.log(arr1, arr2, arr3, arr4, arr5);
console.log(obj1, obj2, obj3, obj4, obj5);

// task 6
var testOne;
let testTwo=4;
 if (1==1)
    {
        var testOne=1;
        let testTwo=2;
        console.log(testOne);
        console.log(testTwo);
    }
console.log(testOne);
console.log(testTwo);

//task 7
let a=10 ,b=5;
console.log(a + b);//15
console.log(a - b);//5
console.log(a * b);//50
console.log(a / b);//2
console.log(a % b);//0

console.log( a > b);//true
console.log(a < b);//false
console.log(a == b);//false
console.log(a != b);//true
console.log( a >= b);//true
console.log(a <= b);//false

let x=true,y=false;
console.log( x && y);//false
console.log(x || y);//true
console.log(!x && !y);//false

a += 5;
console.log(a);//15
a -= 5
console.log(a);//10
a *= 5
console.log(a);//50




