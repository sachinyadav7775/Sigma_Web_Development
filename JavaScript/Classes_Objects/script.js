// let obj = {
//     a: 1,
//     b: "sachin"
// }

// console.log(obj)

// let animal = {
//     eats: true
// };

// let rabbit = {
//     jumps: true
// }

// rabbit.__proto__ = animal;

class animal{
    constructor(name) {
        this.name = name
        console.log("Object is created...")
    }

    eats(){
        console.log("kha raha hoon")
    }
    jump(){
        console.log("kood raha hoon")
    }
}

class Lion extends animal {
    constructor(name) {
        super(name)
        console.log("Object is created and he is a lion...")
    }

    eats(){
        super.eats()
        console.log("kha raha hai roar")
    }
}

let a = new animal("Bunny")
console.log(a)

let l = new Lion("Shera")
console.log(l)