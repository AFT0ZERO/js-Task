//task 1 
let t1 = [1, 2, 3];
let t1New = t1.map((num) => num * num);
console.log(t1New);

//task 2 
let t2 = [1, 2, 3, 20, 23, 15];
let t2New = t2.filter((num) => num > 10);
console.log(t2New);

//task 3 
let t3 = ["hi", "two", "three", "four"];
let t3New = t3.forEach(function (str) {

    console.log(str.toUpperCase())
}
);

//task 4 
const users = [
    { firstName: 'John', lastName: 'Doe', age: 25 },
    { firstName: 'Jane', lastName: 'Doe', age: 7 },
    { firstName: 'Jack', lastName: 'Doe', age: 3 },
    { firstName: 'Jill', lastName: 'Doe', age: 2 },
    { firstName: 'Joe', lastName: 'Doe', age: 45 },
    { firstName: '', lastName: 'don', age: null }
]

const result = users.map((user) => user.firstName)
console.log(result);

//task 5 
const output = users.filter(({ age }) => age > 30)
console.log(output);

//task 6 
let t6 = [1, 2, 3];
var sum = 0;
t6.forEach((num) => sum += num)
console.log(sum);

//task 7
let t7 = ["one", "two", "three", "four"];
let t7New = t7.map((ele) => ele.split("").reverse().join(""))
console.log(t7New);

//task 8
let t8 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
let t8New = t8.filter(function (ele) {
    if (ele <= 1)
        return false;
    for (let i = 2; i < ele; i++)
        if (ele % i == 0)
            return false;
    return true;

})
console.log(t8New);

//task 9 
const t9 = [true, false, true, true];
t9.forEach((ele, ind) => {
    console.log(`Value:${ele} | index:${ind}`);
});

//task 10 
let t10 = [1, 2, 3, 20, 23, 15];
let t10New = t10.map((num) => String(num));
console.log(t10New);

//task 11 
let t11 = [10, 2, 15, 20, 10, 15];
let t11New = t11.filter((num, index) => t11.indexOf(num, index + 1) === -1);
console.log(t11New);

//task 12
const t12 = users.forEach((user) => console.log(user));

//task 13 
let t13 = ["one", "two", "three", "four"];
let t13New = t13.map((ele, index) => ele + index);
console.log(t13New);


//task 14
let t14 = [1, 2, 4, 23, 12, 15, 3, 6];
let t14New = t14.filter((ele) => ele % 2 === 0);
console.log(t14New);

//task 15 
let t15 = [1, 2, 3, 4, 5, 6];
t15.forEach((ele) => console.log(ele * 2));

//task 16 
let t16 = [10, 20, 30, 40, 50, 60];
let t16New = t16.map((ele, index) => ele - index);
console.log(t16New);

//task 17
let t17New = users.filter(({ age }) => age > 5)
console.log(t17New);

//task 18 
let t18 = ["oneone", "two", "three", "four"];
t18.forEach((ele) => console.log(ele.length))

//task 19 
let t19 = ["oneone", "two", "three", "four"];
let t19New = t19.map((ele) => ele.toUpperCase());
console.log(t19New);

//task 20 
let t20 = [10, 20, 30, 40, 50, 60];
sum = 0;
t20.forEach((num) => sum += num)
let avg = sum / t20.length;
let t20New = t20.filter((ele) => ele > avg);
console.log(t20New);

//task 21 
let t21 = [10, 20, 30, 40, 50, 60];
t21.forEach((num) => console.log(num / 2))

//task 22
let t22 = [1, -2, 3, -4, -5, 6];
let t22New = t22.map((ele) => Math.abs(ele));
console.log(t22New);

//task 23 
let t23New = users.filter(({ age }) => age === null)
console.log(t23New);

//task 24 
let t24 = ["oneone", "atwo", "athree", "four"];
let coount = 0;
t24.forEach(function (ele) {
    if (ele.startsWith("a")) coount++;
})
console.log(coount);

//task 25 
let t25 = [10, 20, 30, 40, 50, 60];
let t25New = t25.map((ele) => ele % 3);
console.log(t25New);

//task 26
let t26 = [9, 20, 25, 40, 4, 60];
let t26New = t26.filter(function (ele) {
    if (Math.sqrt(ele) % 1 == 0)
        return true;
})
console.log(t26New);

//task 27 
let t27 = ["oneone", "atwo", "athree", "four"];
t27.forEach(function (ele, index) {
    let obj = [{ value: ele, length: ele.length }];
    console.log(obj);

})

//task 28
let t28 = ["oneone", "two", "three", "four"];
let t28New = t28.map(function (ele) {
    return ele.repeat(2);
});
console.log(t28New);

//task 29 
let t29 = [9, 20, 25, 40, 49, 60, 10, 1];
console.log(t29[Math.floor(t29.length / 2)]);
let t29New = t29.filter((num) => num > t29[t29.length / 2])
console.log(t29New);

//task 30 
let t30 = [9, 20, 25, 40, 49, 60, 10, 1];
t30.forEach((ele) =>
    console.log(Math.sqrt(ele)))

//task 31 


//task 40 
function repeat1(fun, times) {
    return function (num) {
        for (let i = 0; i < times; i++) 
            {
                num = fun(num);
            }
        return num;
    };

}
 const log1 = function(x) {
  return x+2;
}
    var v1 = repeat1(log1 , 2);
    console.log(v1(3));
