// function
// function is a block of code that peforms an action and is
// reuseable1

// types of function
// function declaration
// function expresssion

// let x = myFunction(4, 3);

// function myFunction(a, b) {
// // Function returns the product of a and b
//   return a * b;
// }

// const myFunction = add()
// 1. function declaration.
function add(a,b){
    return(a+b)
}

const sum = add(2,4);
console.log(sum)

function mult(a,b){
    return(a*b)
}

const product = mult(4,8)
console.log(product)

function greet(name){
    console.log("Hello $(name) Welcome to our app")
}
greet("Emmanuel")

const name = "Jomiloju"
console.log("hello $(name)")

function infor(name, course){
    console.log("My name is $(name), I am %(coures) at New Horizion")
}

infor("john","frontend dev")

// function expresstion
const add2 = function (a,b){
    return a+b
}
const sum2 = add(1,2)
console.log(sum2)

const fair = function(hello,Jomiloju){
    return hello
}
const greeting = fair("hello jomiloju")
console.log(greeting)

const greet3 = function(name){
    console.log("Hello %(name)")
}
greet3("Jomiloju")

function info(name,course,school){
    console.log("My name is $(name) jomiloju, I am %(course) Frountend dev , I attend %(school) Lafrogramsz ")
}
info("jomiloju","Frountend dev","Lafrograms")