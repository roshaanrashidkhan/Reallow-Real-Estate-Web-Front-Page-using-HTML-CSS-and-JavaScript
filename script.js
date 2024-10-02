console.log("Let's write JavaScript!");

document.querySelector(".closeButton").addEventListener("click", () => {
    document.querySelector(".nav").style.right = "-100%";
    // document.querySelector(".nav").style.display = "none";
    document.querySelector(".hamburger").style.visibility = "visible";
    document.querySelector(".closeButton").style.display = "none";
})

document.querySelector(".hamburger").addEventListener("click", () => {
    // document.querySelector(".nav").style.display = "flex";
    document.querySelector(".nav").style.right = "0";
    document.querySelector(".closeButton").style.display = "block";
    document.querySelector(".closeButton").style.right = "23px";
    document.querySelector(".hamburger").style.visibility = "hidden";
})