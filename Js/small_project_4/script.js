
addEventListener("DOMContentLoaded", () => {
    const start = document.getElementById("start")
    const Result = document.getElementById("R")
    start.addEventListener("click", () => {
        console.log("started")
        let s_count = document.getElementById("count").value;
        s_count = parseInt(s_count)
        let sum = s_count+1;
        let x=setInterval(() => {
            sum -= 1;
            Result.innerHTML = `<h1>${sum}</h1>`;
            if(sum === 3){
                Result.innerHTML = `<h1>${sum} "Ignition!" </h1>`;
            }
            if(sum === 0){
                Result.innerHTML = `<h1>${sum} "Lift_off!" </h1>`;
                clearInterval(x)
            }
        }, 1000)

    });

})