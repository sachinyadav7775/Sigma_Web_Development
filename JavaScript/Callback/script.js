console.log("Harry is a hacker")
console.log("Sachin is a hacker")

setTimeout(() => {
    console.log("Hey i am a boy")
}, 1000);

console.log("The End")

const fn = () => {
    console.log("Nothing")
}

const callback = (arg, fn) => {
    console.log(arg)
    fn()
}

const loadScript = (src, callback) => { 
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Harry", fn);
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)