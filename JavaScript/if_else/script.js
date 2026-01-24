console.log("Hey i am if else")

let age = 16;

let grace = 3;
console.log(age)
console.log(age + grace);
console.log(age - grace);
console.log(age * grace);
console.log(age / grace);
console.log(age % grace);
console.log(age ** grace);

if (age >= 18) {
    console.log("You can drive");
} else if (age > 1 && age <=12) {
    console.log("You are small child not drive");
} else {
    console.log("You can not drive");
}

a = 18;
b = 12;
let c = a < b ? (a - b) : (b - a);
console.log(c)

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

let cuet_marks = 604;

if (cuet_marks >= 651 && cuet_marks <= 1200) {
    console.log("Your marks are valid for all branches of Allahabad University, Kanpur University, Delhi University and BHU");
} else if (cuet_marks >= 601 && cuet_marks <= 1100) {
    console.log("Your marks are valid for all branches of Kanpur University, Delhi University and BHU");
} else if (cuet_marks >= 501 && cuet_marks <= 1000) {
    console.log("Your marks are valid for all branches of Delhi University and BHU");
} else if (cuet_marks >= 401 && cuet_marks <= 750) {
    console.log("Your marks are valid for all branches of BHU");
} else {
    console.log("Your marks are not accepted by all universities");
}

let stud_marks = 222;

if (stud_marks >= 597.5) {
    console.log("Rank 1")
} else if (stud_marks >= 594) {
    console.log("Rank 2")
} else if (stud_marks >= 591) {
    console.log("Rank 3")
} else if (stud_marks >= 590) {
    console.log("Top 10 Student")
} else {
    console.log("Passed(No Rank)")
}