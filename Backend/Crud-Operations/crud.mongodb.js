use("CrudDb")

db.createCollection("courses")

// db.courses.insertOne({
//     Name: "Sky web dev free course",
//     Price: 0,
//     Assignments: 14,
//     Project: 10,
// })

// db.courses.insertMany([
//     {
//         Name: "Sky Web Dev Free Course",
//         Price: 0,
//         Assignments: 14,
//         Project: 10,
//         Instructor: "Sachin",
//         Duration: "8 Weeks",
//         Students: 1250,
//         Rating: 4.8,
//         Level: "Beginner",
//         Category: "Web Development"
//     },
//     {
//         Name: "React JS Beginner Course",
//         Price: 499,
//         Assignments: 18,
//         Project: 8,
//         Instructor: "Rahul",
//         Duration: "6 Weeks",
//         Students: 980,
//         Rating: 4.6,
//         Level: "Beginner",
//         Category: "React"
//     },
//     {
//         Name: "JavaScript Complete Course",
//         Price: 999,
//         Assignments: 25,
//         Project: 12,
//         Instructor: "Amit",
//         Duration: "10 Weeks",
//         Students: 2100,
//         Rating: 4.9,
//         Level: "Intermediate",
//         Category: "JavaScript"
//     },
//     {
//         Name: "HTML CSS Master Course",
//         Price: 0,
//         Assignments: 20,
//         Project: 6,
//         Instructor: "Vikas",
//         Duration: "5 Weeks",
//         Students: 1750,
//         Rating: 4.7,
//         Level: "Beginner",
//         Category: "Frontend"
//     },
//     {
//         Name: "Node JS Backend Course",
//         Price: 1499,
//         Assignments: 22,
//         Project: 10,
//         Instructor: "Rohit",
//         Duration: "9 Weeks",
//         Students: 850,
//         Rating: 4.5,
//         Level: "Intermediate",
//         Category: "Backend"
//     },
//     {
//         Name: "MongoDB Database Course",
//         Price: 799,
//         Assignments: 15,
//         Project: 7,
//         Instructor: "Ankit",
//         Duration: "4 Weeks",
//         Students: 720,
//         Rating: 4.6,
//         Level: "Beginner",
//         Category: "Database"
//     },
//     {
//         Name: "Full Stack Web Development",
//         Price: 2499,
//         Assignments: 35,
//         Project: 15,
//         Instructor: "Sachin",
//         Duration: "16 Weeks",
//         Students: 3200,
//         Rating: 4.9,
//         Level: "Advanced",
//         Category: "Full Stack"
//     },
//     {
//         Name: "Tailwind CSS Course",
//         Price: 399,
//         Assignments: 12,
//         Project: 5,
//         Instructor: "Kunal",
//         Duration: "3 Weeks",
//         Students: 650,
//         Rating: 4.4,
//         Level: "Beginner",
//         Category: "CSS"
//     },
//     {
//         Name: "Git GitHub Beginner Course",
//         Price: 0,
//         Assignments: 10,
//         Project: 4,
//         Instructor: "Vivek",
//         Duration: "2 Weeks",
//         Students: 1100,
//         Rating: 4.8,
//         Level: "Beginner",
//         Category: "Tools"
//     },
//     {
//         Name: "Next JS Advanced Course",
//         Price: 1999,
//         Assignments: 28,
//         Project: 12,
//         Instructor: "Neeraj",
//         Duration: "12 Weeks",
//         Students: 1450,
//         Rating: 4.7,
//         Level: "Advanced",
//         Category: "Next.js"
//     }
// ])

// READ
// let a = db.courses.find({Price:0})
// console.log(a.count())
// console.log(a.toArray())

// let b = db.courses.findOne({Price:0})
// console.log(b)

// UPDATE

// db.courses.updateOne({Price:0}, {$set:{Price:200}})
// db.courses.updateMany({Price:0}, {$set:{Price:200}})

// DELETE

// db.courses.deleteOne({Price:200})