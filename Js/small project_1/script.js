document.title="Color changer"
let B1 = document.getElementById("Gray");
let B2 = document.getElementById("White");
let B3 = document.getElementById("Blue");
let B4 = document.getElementById("Yellow");

B1.addEventListener("click",()=>{
    document.body.style="background-color: rgb(135, 133, 133)"
});

B2.addEventListener("click",()=>{
    document.body.style="background-color: rgb(255, 255, 255)"
});

B3.addEventListener("click",()=>{
    document.body.style="background-color: rgba(39, 0, 237, 1); color: white;"

});

B4.addEventListener("click",()=>{
    document.body.style="background-color: rgba(231, 216, 9, 1)"
});