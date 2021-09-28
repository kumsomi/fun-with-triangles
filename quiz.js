const submitButton = document.querySelector("#submit-answer-btn");
const quizForm = document.querySelector(".quiz-form");
const outputE2 = document.querySelector("#output");

//data structure for storinf the right answers in the same manner as the numbering of questions
const correctAnswers = ["90", "right angled"];

function calculateScore(){
    let score=0;
    let index=0;
    const formResults = new FormData(quizForm);
    for(let value of formResults.values()){
        if (value === correctAnswers[index]){
            score+=1;
        }
        index += 1;
    }
    // console.log(score); 
    outputE2.innerText = "Your score is: " + score; 
}
submitButton.addEventListener("click", calculateScore);
