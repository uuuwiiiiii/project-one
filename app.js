let name = "Павел";
const age = 23;


const header = document.querySelector("#header");
const myButton = document.querySelector("#testBtn");
const myHome = document.querySelector("#home");
const myInput = document.querySelector("input");
console.log(home);
console.log(myInput.value);
/**
 * Вывод в консоль
 */
console.log(name, age);

if (age == 23) {
    console.log(age)
} else {
    console.log(24)
}

let result = (age == 23) ? age : 24;
console.log("сокращенное условие : " + result)
let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}
console.log("----------------------------------");
i = 0;
do {
    console.log(i);
    i++;
} while (i < 3)
console.log("----------------------------------");
for (let j = 0; j < 10; j++) {
    if (j == 5) {
        continue;
    }
    console.log(j);
}
let x = 3;
switch(x) {
    case 1 : console.log(x);
    case 2 : console.log(x);
    default : console.log("error");
}

let str = "Hello";

function sayHello() {
    console.log(str)
}

sayHello();

function message() {
    console.log(header)
    let pos = window.scrollY;
    console.log(pos);
}

window.addEventListener("scroll", message)

myButton.addEventListener("click", function() {
    let sum =  Number(myInput.value) + 10;
    console.log(sum)
})

home.addEventListener("click", function(){
    console.log("Home нажата")
})