const outputE4 = document.querySelector("#output");
const areaBtn = document.querySelector("#check-area");
const parameters = document.querySelectorAll(".parameters");

function calculateArea(){
    const area = 0.5*(Number(parameters[0].value) * Number(parameters[1].value));
    outputE4.innerText = "The area of triangle: " + area +"cm";
    // console.log(area);

}

areaBtn.addEventListener("click", calculateArea);