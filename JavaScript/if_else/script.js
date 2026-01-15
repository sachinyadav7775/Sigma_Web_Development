console.log("Hey i am if else")

let age = 17;

if(age >= 18) {
    console.log("You can drive");
} else if(age > 1 && age <=12 ) {
    console.log("You are small child not drive");
} else {
    console.log("You can not drive");
}

let x = 10;

if (x > 15) {
    console.log("x is greater than 15");
} else if (x > 10) {
    console.log("x is greater than 10 but less than or equal to 15");
} else if (x > 5) {
    console.log("x is greater than 5 but less than or equal to 10");
} else {
    console.log("x is less than or equal to 5");
}

let Marks = 38;

if(Marks > 90 && Marks <= 100) {
    console.log("A1");
} else if(Marks > 80 && Marks <= 90) {
    console.log("A2");
} else if(Marks > 70 && Marks <= 80) {
    console.log("B1")
} else if(Marks > 60 && Marks <= 70) {
    console.log("B2")
} else if(Marks > 50 && Marks <= 60) {
    console.log("C1")
} else if(Marks > 40 && Marks <= 50) {
    console.log("C2")
} else if(Marks > 30 && Marks <= 40) {
    console.log("D");
} else if(Marks >= 23) {
    console.log("Pass")
} else {
    console.log("Fail")
}  