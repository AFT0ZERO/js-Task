//task 1
function sayHello(Name) {
    console.log("Hello " + Name);
}

//task 2
var square = function (number) {
    return number ** 2
};

//task 3
var multiply = (num1, num2) => {
    return num1 * num2;
}

//task 4
let car = {
    make:"bmw", 
    model:"x5" ,
    year:"2024",
    getCarInfo:function(){
        return `${this.make} ${this.model} (${this.year})`;
    }
    };

//task 5
let colors=["blue","red","green","white","black"];
function printColors(Array)
{
    for(let i =0; i<Array.length;i++)
        {
            console.log(Array[i]);
        }
}
printColors(colors);

//task 6
function getStringLength(str)
{
    return str.length;
}

//task 7
function toUpperCases(str)
{
    return str.toUpperCase();
}

//task 8
function splitString(str,delimiter)
{
    let myArray = str.split(delimiter);
    return myArray;
}
