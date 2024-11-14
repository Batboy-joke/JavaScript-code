// Loops are used to execute a lock of code repeatedly utill
// specific conditions are met.

for (let i = 1; i < 11; i++) {
    console.log("hello from loop " + i);
};

const colour = ["red", "green", "blue", "yellow"]

for (let i = 0; i < colour.length; i++){
    console.log("colour:", colour[i]);
}

const fruit = ["apple", "bananna", "orange", "mango", "watermelon"]

for (let i = 0; i < fruit.length; i++) {
    console.log("fruit:", fruit[i]);
} 

const students = [
    { name: "Jomiloju" , grade: 85 },
    { name: "Olowo" , grade: 92 },
    { name: "seyi" , grade: 100 }
]

for (let i = 0; i < students.length; i++){
    console.log("Students:", students[i].name, "Grade:", students[i].grade);
}

const myself = [
    { name : "Olowo Jomiloju", school : "New Horizons", course : "Web Development"}
]

for (let i = 0; i < myself.length; i++){
    console.log("My name is", myself[i].name, "My school is",
     myself[i].school, "My course is", myself[i].course)
}

// While loop
let i = 0;
while(i < 5){
    console.log("count is: "+i)
    i++
}

const Colour = ["red", "green", "blue", "yellow"]

let c = 0;
while(c < Colour.length){
    console.log("color:",Colour[c])
    c++
}