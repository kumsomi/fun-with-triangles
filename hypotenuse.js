const outputBtn = document.querySelector("#output");
const sides = document.querySelectorAll(".side-input");
const hypotenuseBtn = document.querySelector("#hypotenuse-btn");

function calculateSumOfSquare(a, b){
    const SumOfSquare = a*a + b*b
    // console.log(SumOfSquare);
    return SumOfSquare;
}

function calculateHypotenuse(){
    // calculateSumOfSquare(3,4);
    SumOfSquare = calculateSumOfSquare(Number(sides[0].value), Number(sides[1].value));
    const lengthOfHypotenuse = Math.sqrt(SumOfSquare);
    outputBtn.innerText = "The length of hypotenuse is: " + lengthOfHypotenuse;
}

hypotenuseBtn.addEventListener('click', calculateHypotenuse);