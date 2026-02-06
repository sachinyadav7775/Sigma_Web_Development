function nice(name) {
    console.log(" Hey " + name + " you aur nice!")
    console.log(" Hey " + name + " you aur good!")
    console.log(" Hey " + name + " your shirt is nice!")
    console.log(" Hey " + name + " your course is good too!") 
}

nice("sujeet");
nice("anurag");
nice("Shivam");

function sum(a, b, c = 8) {
    // console.log(a + b + c);
    // console.log(typeof a, typeof b, typeof c)
    return (a + b + c);
}

result1 = sum(3,4);
result2 = sum(22,42);
console.log("The sum of these numbers is: ", result1)
console.log("The sum of these numbers is: ", result2)

const func1 = (x)=> {
    console.log("I am an arrow function", x)
}

func1(44);
func1(55);
func1(77);