//task 1
localStorage.setItem("task1","Hello,World!");

console.log(localStorage.getItem("task1"));

//task 2 
localStorage.setItem("task2",123);
console.log(localStorage.getItem("task2"));

//task 3
localStorage.setItem("task3",true);
console.log(localStorage.getItem("task3"));

//task 4 
localStorage.setItem("task4","true");
localStorage.removeItem("task4");

//task 5
localStorage.setItem("task5","true");
localStorage.setItem("task5_1","hi");
localStorage.setItem("task5_2","hi");
localStorage.clear();

//task 6
if(localStorage.getItem("task1")){
        console.log("the item found")
    } else {
        console.log("the item is not found")
    }

//task 7
localStorage.setItem("task7",JSON.stringify([1,2,3]));
console.log(localStorage.getItem("task7"));

//task 8 

let obj = { "name" : "john" , "age":30};
localStorage.setItem("task8",JSON.stringify(obj));
console.log(localStorage.getItem("task8"));

//task 9 

localStorage.setItem("task9","task9");
localStorage.setItem("task9_1","task9");
localStorage.setItem("task9_2","task9");
localStorage.setItem("task9_3","task9");
console.log(localStorage.getItem("task9"));
console.log(localStorage.getItem("task9_1"));
console.log(localStorage.getItem("task9_2"));
console.log(localStorage.getItem("task9_3"));

//task 10 
localStorage.setItem("task10","hi");
console.log(localStorage.getItem("task10"));

localStorage.setItem("task10","hi hi hi");
console.log(localStorage.getItem("task10"));

//task 11 
sessionStorage.setItem("task11","Hello,World!");
console.log(sessionStorage.getItem("task11"));

//task 12 
sessionStorage.setItem("task12",123);
console.log(sessionStorage.getItem("task12"));

//task 13 
sessionStorage.setItem("task13",true);
console.log(sessionStorage.getItem("task13"));

//task 14 
sessionStorage.setItem("task14","true");
sessionStorage.removeItem("task14");

//task 15 
sessionStorage.setItem("task15","true");
sessionStorage.setItem("task15_1","hi");
sessionStorage.setItem("task15_2","hi");
sessionStorage.clear();

//task  16 
if(sessionStorage.getItem("task11")){
    console.log("the item found")
} else {
    console.log("the item is not found")
}

//task 17 
sessionStorage.setItem("task17",JSON.stringify([1,2,3]));
console.log(sessionStorage.getItem("task17"));

//task 18 
sessionStorage.setItem("task18",JSON.stringify(obj));
console.log(sessionStorage.getItem("task18"));

//task 19 
sessionStorage.setItem("task19","task19");
sessionStorage.setItem("task19_1","task19");
sessionStorage.setItem("task19_2","task19");
sessionStorage.setItem("task19_3","task19");
console.log(sessionStorage.getItem("task19"));
console.log(sessionStorage.getItem("task19_1"));
console.log(sessionStorage.getItem("task19_2"));
console.log(sessionStorage.getItem("task19_3"));

// task 20
sessionStorage.setItem("task20","hi");
console.log(sessionStorage.getItem("task20"));

sessionStorage.setItem("task20","hi hi hi");
console.log(sessionStorage.getItem("task20"));
