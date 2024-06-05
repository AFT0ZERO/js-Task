//task 1
let t1=document.getElementById("header");
t1.innerHTML="Welcome to DOM Manipulation";

//task 2
let t2 = document.getElementsByClassName("item");
t2[0].innerHTML="Class Item";

//task 3
let t3 = document.getElementsByTagName("p");
t3[0].innerHTML="Paragraph Element";

//task 4
let t4 = document.querySelector(".highlight");
t4.innerHTML="First highlight Item";

//task 5
let t5 = document.querySelectorAll("li");
t5[0].innerHTML="List Item";
t5[1].innerHTML="List Item";
t5[2].innerHTML="List Item";

//task 6
let t6 = document.querySelector("#footer");
t6.innerHTML="Footer updated";

//task 7
let t7 = document.querySelectorAll(".box");
t7[0].innerHTML="Box Item";

//task 8
let t8 = document.querySelector(".container p");
t8.innerHTML="new text";

//task 9
let t9 = document.querySelector("div[data-role]");
t9.innerHTML="updated";

//task 10
let t10 = document.getElementsByTagName("p");
t10[0].innerHTML="updated";
