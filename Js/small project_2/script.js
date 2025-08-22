
const B = document.getElementById("Calc")

B.addEventListener("click", () => {
    const W = document.getElementById("weight").value;
    const H = document.getElementById("height").value;
    if (!W || !H) {
        alert("Please enter both weight and height.");
        return 0;
    }
    let BMI = W / H ** 2
    BMI = BMI.toFixed(2)

    const card= document.createElement("div");
    card.className="card";
    card.innerHTML = `
    <h1>Your BMI result</h1>

    <h1>BMI = ${BMI}</h1> 
    
    `;

    document.body.appendChild(card);
});


