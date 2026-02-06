console.log("Sachin")

// let boxes = document.getElementsByClassName("box")
// console.log(boxes)

// boxes[2].style.backgroundColor = "green";

// document.getElementById("skyblue-box").style.backgroundColor = "skyblue";
document.querySelector(".box").style.backgroundColor = "blue";
document.querySelectorAll(".box").forEach(element => {
    element.style.backgroundColor = "skyblue";
});