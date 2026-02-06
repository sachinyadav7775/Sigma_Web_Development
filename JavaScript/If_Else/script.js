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

// let names = ["Ram", "Shyam", "Madhav", "Krishna", "Balram", "Mahabharat", "ArjunDev"]

// const answer = []

// for await (const element of names) {
//     if(element.length < 4) {
//         answer.push("Low Power")
//     }else if(element.length < 7) {
//         answer.push("Medium Power")
//     }else if(element.length < 10) {
//         answer.push("High Power")
//     }else {
//         answer.push("Ultimate Power")
//     }
// }

// console.log(answer)

// let names = ["Ram", "Shyam", "Madhav", "Krishna", "Balram", "Mahabharat", "ArjunDev"];

// const answer = [];

// for (const element of names) {
//     let power = "";

//     if (element.length < 4) {
//         power = "Low Power";
//     } else if (element.length < 7) {
//         power = "Medium Power";
//     } else if (element.length < 10) {
//         power = "High Power";
//     } else {
//         power = "Ultimate Power";
//     }

//     answer.push({
//     name: element,
//     power: power
//     });
// }

// console.log(answer);

// let student = ["sujeet", "anurag", "avanish", "ankit", "shivam", "ram", "shayam", "amit"]

// const ans = []

// for (const element of student) {
//     let marks = ""

//     if(element.length < 35) {
//         marks = "Fail";
//     }else if(element.length < 60) {
//         marks = "Pass";
//     }else if(element.length < 80) {
//         marks = "Good";
//     }else {
//         marks = "Excellent";
//     }

//     ans.push({
//         name: element,
//         marks: marks
//     });
// }

// console.log(ans)

// let number = 8

// if(number % 2 == 0) {
//     console.log("Even")
// }else{
//     console.log("odd")
// }

// let marks = 90

// if(marks >= 90) {
//     console.log("Grade A")
// }else if(marks >= 60) {
//     console.log("Grade B")
// }else if(marks >= 40) {
//     console.log("Grade C")
// }else{
//     console.log("Fail")
// }

// let age = 18 

// if(age >= 18) {
//     console.log("Eligible for vote")
// }else {
//     console.log("Not Eligible for vote")
// }

// let Num = -9876

// if(Num >= 1) {
//     console.log("Positive")
// }else if(Num < 0) {
//     console.log("Negative")
// }else {
//     console.log("Zero")
// }

// let year = 325

// if(year % 400 == 0) {
//     console.log("Leap Year")
// }else if(year % 100 == 0) {
//     console.log("Not Leap Year")
// }else if(year % 4 == 0) {
//     console.log("Leap Year")
// }else {
//     console.log("Not Leap Year")
// }

// let a = 44, b = 22, c = 8

// if(a > b && a > c) {
//     console.log("a is largest")
// }else if(b > a && b > c) {
//     console.log("b is largest")
// }else {
//     console.log("c is largest")
// }

// let a = 80, b = 22, c = 80

// if(a > b && a > c) {
//     console.log("a is largest")
// }else if(b > a && b > c) {
//     console.log("b is largest")
// }else if(c > a && c > b) {
//     console.log("c is largest")
// }else {
//     console.log("Two or more numbers are equal and largest")
// }

// let Age = 55

// if(Age < 0) {
//     console.log("Invalid Age");
// } else if(Age <= 12) {
//     console.log("Child");
// } else if(Age <= 19) {
//     console.log("Teenager");
// } else if(Age <= 59) {
//     console.log("Adult");
// } else {
//     console.log("Senior Citizen");
// }

let units = 410

if(units < 0) {
    console.log("Invalid Unit")
}else if(units <= 100) {
    console.log(units * 5)
}else if(units <= 200) {
    console.log(units * 7)
}else if(units <= 300) {
    console.log(units * 10)
}else {
    console.log(units * 15)
}