console.log("Hello sky");

// console.log("sachin")

// // The Magical Sorting Hat: Imagine you are creating a magical sorting hat for a wizard school. Implement a JavaScript function that takes an array of student names and assigns them to one of the four houses (Gryffindor (length less than 6), Hufflepuff(length less than 8), Ravenclaw(length less than 12), or Slytherin(length greater than or equal to 12)) based on the length of their names.

// let students = ["shubh", "anajali", "Shivani", "Shivangi", "Annapurna", "Shubham", "Krishnanendu", "Ravindranathan", "Shivesh", "kaif", "Emanuel"]

// let houses = []

// for (const student of students) {
//     if(student.length < 6){
//         houses.push("Gryffindor")
//     }
//     else if(student.length < 8){
//         houses.push("Hufflepuff")
//     }
//     else if(student.length < 12){
//         houses.push("Ravenclaw")
//     }
//     else{
//         houses.push("Slytherin")
//     }
// }

// console.log(houses)

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

let students = [
    { name: "Aman", marks: 32 },
    { name: "Rohit", marks: 55 },
    { name: "Neha", marks: 78 },
    { name: "Priya", marks: 90 },
    { name: "Karan", marks: 45 }
];

const ans = [];

for (const student of students) {
    let result = "";

    if (student.marks < 35) {
        result = "Fail";
    } else if (student.marks < 60) {
        result = "Pass";
    } else if (student.marks < 80) {
        result = "Good";
    } else {
        result = "Excellent";
    }

    ans.push({
        name: student.name,
        marks: student.marks,
        result: result
    });
}

console.log(ans);