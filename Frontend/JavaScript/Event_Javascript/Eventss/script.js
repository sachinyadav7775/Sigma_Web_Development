let button = document.getElementById("btn")

button.addEventListener("dblclick", () => {
    document.querySelector(".box").innerHTML = "<b> Yes Button Click Me <b> Enjoy Sachin !"
})

button.addEventListener("contextmenu", () => {
    alert("Dont Right Click ")
})

button.addEventListener("keydown", (e)=> {
    console.log(e)
})

// document.addEventListener("keydown", (e)=>{
//     console.log(e.key,e.keyCode)
// })