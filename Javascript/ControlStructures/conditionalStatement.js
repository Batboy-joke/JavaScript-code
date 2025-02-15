// control structure in js is essential for controlling the flow of
// execution in your code. This allow you to dictate how your
// programme should respond based on conditions.

// 1. conditional statement
// conditional statement executes a block of code if the specified
// condition is true od false

// a. If statement 
let temperature = 30;

if(temperature > 25) {
    console.log('it is a hot day!')
} else {
    console.log('it is a cold day')
}

const isAdmin = false;
const isSuperUser = false;

if (isAdmin || isSuperUser) {
    console.log("you can have access to the app")
}else {
    console.log("you are not allow to access this app")
}


// write if statement that checkes if someone as paid school
// fees and also have good health before the person can
// have access to the class, else the person should go back home.

// your output should be: welcome to the class or go back home.

const hasPaidfees = true;
const hasGoodhealth = false;

if (hasPaidfees && hasGoodhealth) {
    console.log("Welcome to the class") 
}else {
    console.log("Go back home")
}

// let age = 25;
// if (age > 25){
//     console.log("your age is above 25")
// } else if(age < 25){
//     console.log("your age is below 25")
// } else{
//     console.log("your age is 25")
// }

let fruit = "apple";
if(fruit === "bannana") {
    console.log("we have bannana in the store")
} else if(fruit === "orange"){
    console.log("we have orange in our store")
} else if(fruit === "coconut") {
    console.log("we have coconut in the store")
} else if(fruit === "apple") {
    console.log("we have apple in the store")
} else{
    console.log("we do not have any fruit in our store")
}

let fruit1 = "apple"

switch (fruit1) {
    case "bannana":
        console.log("it is bannana");
        break;
    case "apple":
        console.log("it is apple");
        break;
    default:console.log("we do not have any fruit")
}


let age1 = "25"

switch (age1) {
    case "age > 25":
        console.log("Your age is above 25");
        break;
    case "age < 25":
        console.log("Your age is below 25");
        break;
    default:console.log("Your age is 25")
}


const actions = ["start","stop","pause"];
let userAction = "start";
let isLoggedIn = true;
switch(true) {
    case actions.includes(userAction) && isLoggedIn:
        console.log("Action permitted:" + userAction);
        break;
    case actions.includes(userAction) && !isLoggedIn:
        console.log("please log in to perform this action");
        break;
    default:
        console.log("No valid case found.");

}