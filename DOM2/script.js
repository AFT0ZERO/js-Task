//task 1
const btn1 = document.getElementsByClassName("t1");
function tast1() {
    alert("Button clicked!");
}
btn1[0].addEventListener("click", tast1);


//task 2
const btn2 = document.getElementsByClassName("btn2");

function task2() {
    let p2 = document.getElementsByClassName("p1");
    p2[0].textContent = "don't click me please?";
}
btn2[0].addEventListener("click", task2);


//task 3
let t3 = document.getElementsByClassName("task3");
function task3() {
    t3[0].style.backgroundColor = "blue";
}
t3[0].addEventListener("dblclick", task3);


//task 4 
var t4 = document.getElementsByClassName("task4");
function task4() {
    t4[0].textContent = "hi please go out !";
}
t4[0].addEventListener("mouseover", task4);


//task 5
function task5() {
    t4[0].textContent = "hi hi hi hi";
}
t4[0].addEventListener("mouseout", task5);


//task 6
function task6() {
    console.log("the form was submit");
}
document.getElementsByClassName("task6")[0].addEventListener("submit", task6);


//task 7
document.querySelector("[name='task61']").onfocus = function () {
    document.querySelector("[name='task61']").style.background = "blue";
}


//task 8
function blur() {
    document.querySelector("[name='task61']").style.background = "white";
}
document.querySelector("[name='task61']").addEventListener("blur", blur);


//task 9
let t9 = document.querySelector("[name='task61']");
function key() {
    console.log(t9.value)
}
t9.addEventListener("keydown", key)


// task 10 
let t10 = document.getElementsByClassName("task10")[0];
function task10() {
    t10.classList.toggle("task3");
}
t10.addEventListener("click", task10);

//task 11
let userName = document.querySelector("[name='userName']");
let password = document.querySelector("[name='password']");


document.getElementsByClassName("task11")[0].onsubmit = function (e) {
    let userValid = false;
    let passValid = false;

    if (userName.value !== "") {
        userValid = true;
    }
    if (password.value !== "") {
        passValid = true;
    }
    // if (!userValid || !passValid) e.preventDefault();
    if (userValid === false || passValid === false) {
        e.preventDefault();
    }
};


//task 12
function task12() {
    document.images[0].src = "../../photo/js.png";
}
document.getElementById("btn3").addEventListener("click", task12);

//task 13 
function task13() {
    if (document.querySelector("[name='text']").checked === true) {
        document.querySelector("[name='pass2']").type = "text";
    }
    else {
        document.querySelector("[name='pass2']").type = "password";
    }
}
document.querySelector("[name='text']").addEventListener("click", task13);

//task 14
function task14() {
    document.getElementsByClassName("task14")[0].style.backgroundColor = document.querySelector("[type='color']").value;
}
document.querySelector("[type='color']").addEventListener("input", task14);


//task 15

const imageUrls = [
    '../../photo/js.png',
    '../../photo/css.png',
    '../../photo/html.png',
    '../../photo/logo4.png'
];

const displayedImage = document.getElementById('displayedImage');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
var currentIndex = 0;
function updateImage() {
    displayedImage.src = imageUrls[currentIndex];
}
nextButton.addEventListener('click', function () {
    currentIndex++;
    if (currentIndex >= imageUrls.length) {
        currentIndex = 0;}
   // currentIndex = (currentIndex + 1) % imageUrls.length;
    updateImage();
});
prevButton.addEventListener('click', function () {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 3;}
        //currentIndex = (currentIndex - 1 + imageUrls.length) % imageUrls.length;
     updateImage();


});

updateImage();

// task 16 

const contentArray = [
    'hi',
    'hi hi',
    'hi hi hi',
    'hi hi hi hi'
];

let currentIndex2 = 0;


const contentDiv = document.getElementById('contentDiv');
const loadButton = document.getElementById('loadButton');

function loadContent() {
    contentDiv.innerHTML +=" "+ contentArray[currentIndex2];
    currentIndex2++;
    if (currentIndex2 >= imageUrls.length) {
        currentIndex2 = 0;}
  //  currentIndex2 = (currentIndex2 + 1) % contentArray.length;
}

loadButton.addEventListener('click', loadContent);

//task 17 
