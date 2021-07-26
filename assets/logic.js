//GLOBAL VARIABLES 
//variabel to target html elements
var startButton = document.querySelector("#start");
var timerbox = document.querySelector("#timer");
var choices = document.querySelector("#choices");
var qustionBox = document.querySelector("#question");
var results = document.querySelector("#results");
var clearScore = document.querySelector("#clear-score");

//variable to keep of time and score 
var timeLeft = 5;


timerbox.innerHTML = `
<h3>time left: ${timeLeft}</h3>
`

function startTimer() {
    var timeRemaing = setInterval(function() {
        if (timeLeft > 0) {
            timeLeft--; 
            timerbox.innerHTML = `
            <h3>time left: ${timeLeft}</h3>
        `
        }
        else if (timeLeft === 0) clearInterval(timeRemaing);
    }, 1000);
}


var question = [
    {
        question:'What college team is in Alabma?',
        choices: ['Alabama','Georgia','Miami','Tennesse'],
        correctAnswer:'Alabama' 
    },
    {
        question:'What is your favorite food2?',
        choices: ['Apples2','Oranges2','Bananas2','Pears2'],
        correctAnswer:'Apples2' 
    },
    {
        question:'What is your favorite food23?',
        choices: ['Apples23','Oranges23','Bananas23','Pears23'],
        correctAnswer:'Apples23' 
    },
    {
        question:'What is your favorite food24?',
        choices: ['Apples24','Oranges24','Bananas24','Pears24'],
        correctAnswer:'Apples24' 
    }
];



function startQuiz() {
    startTimer();
    startButton.setAttribute("class", "hide");    
}

startGame = () =>
questions.forEach(question =>{
    var newQuestion = document.createElement("div");
    newQuestion.setAttribute("class", "question");
    var newQuestionT = document.createElement("div");
    newQuestion.setAttribute("class", "question");
    var newQuestionS = document.createElement("div");
    newQuestionM = document.createElement("div");
    var newQuestionB = document.createElement("div");
    console.log(question.correctAnswer);
}) 

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};

function endGame() {
    MessageChannel.innerHTML = "Game Over";
}