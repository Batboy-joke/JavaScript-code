// operators in js are special symbols that performs operations on one or more
// files in our js file system

// 1. Arrithmetic operators
// addition
let sum =5 +3;
console.log(sum)

// subtractions
let difference = 10 - sum;
console.log(difference)

// multiplication
let product = sum * difference;
console.log(product)

// division
let quotient = product / 4;
console.log(quotient)

// modulus
let remainder = quotient % 3;
console.log(remainder)

// 2. Assignment operators
// These operators assign values to variables

// assignment
let x = 5;
console.log(x)

// addition assignment
let y = 5
y +=1;
console.log(y)

// subtraction assignment
let z = 10;
z -= y;
console.log(z)

// 3. Comparision Operators
// These operators compare values and return a boolean value

// Equal
console.log(5 == "5")

// strict Equal
console.log(5 === "5")

// Not Equal
console.log(5 != "5")

// strict Not Equal
console.log(5 !== "5")

// not Equal
console.log(5 != '5')
let n = 3
let a = 2

console.log(n != a)

// strict not equal 
console.log (5 !== '5')
let u = "smith"
let f = 10;
console.log(u !==f)

// Greater than
console.log(10 > 5)
let h = 12
let j = 10
let w = h + j
console.log(h > j)

// less than
console.log(3 < 2)
let q = 12
let i = 10
let r = q - i
console.log(w < r)

// greater than and equal
console.log(4 >= 5)
let o = 6
let p = 6
let d = o * 2
console.log(o >= p)

let e = p - 3

console.log(n >= e)

// using logical operators declare four varibles that logs boolean value on
// console.
// using comment on the vs code editor explain the meaning and how it functions.

// && operators
const hasDriverLincence = true;
const hasInsurance = true;

const carDrive = hasDriverLincence && hasInsurance;
console.log(carDrive)

const isAdult = true;
const isHungery = false;

const canEnter = isAdult && isHungery;
console.log(canEnter)

const knowsHTML = false;
const knowCSS = true;
const canDesigWebsite = knowsHTML || knowCSS;
console.log(canDesignWebsite);

const isAdmin = false;
const isSuperUser = false;

const canAccessPage = isAdmin || isSuperUser;
console.log(canAccessPage)
