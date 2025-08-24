let cout = document.getElementById("count");
const B1 = document.getElementById("+");
const B2 = document.getElementById("-");

let count = cout.innerText;
let cnt = parseInt(count)
console.log(typeof(cnt));
B1.addEventListener("click",()=>{
    cnt += 1;
    cout.innerText = cnt;
})
B2.addEventListener("click",()=>{
    cnt -= 1;
    cout.innerText = cnt;
})