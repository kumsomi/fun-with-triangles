const inputs =document.querySelectorAll(".angle-input");
// querySelectorAll returns an array

const isTriangleButton = document.querySelector("#is-triangle-btn");
const outputE1 = document.querySelector("#output");

function calculateSumOAngles(angle1, angle2, angle3){
    const sumOfAngles = angle1 + angle2 + angle3;
    // console.log(sumOfAngles);
    return sumOfAngles;
}

function isTriangle(){
    const sumOfAngles = calculateSumOAngles(Number(inputs[0].value), Number(inputs[1].value), Number(inputs[2].value));
    // console.log(sumOfAngles);
    if (sumOfAngles === 180){
        outputE1.innerText = "Yay! It's a triangle";
    }
    else{
        outputE1.innerText = "Oh ho! It's not a triangle";
    }
}

isTriangleButton.addEventListener("click", isTriangle)


