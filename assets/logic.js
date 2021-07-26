
//GLOBAL VARIABLES 
//variabel to target html elements
var body = document.body;
var bodyJ = $("body");
var startButton = document.querySelector("#start");
var timerbox = document.querySelector("#timer");
var choices = document.querySelector("#choices");
var qustionBox = document.querySelector("#question");
var results = document.querySelector("#results");
var clearScore = document.querySelector("#clear-score");
var score = document.querySelector("#score");
var titleText = document.querySelector("#titleText");
//variable to keep of time and score 
var timeLeft = 5;
var startingScore = 0;
timerbox.innerHTML = `
<h3>time left: ${timeLeft}</h3>
`
score.innerHTML = startingScore;
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
var questions = [
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
    // Showing the answer choices on start button click
    choices.classList.remove('hide');
    // Removing 'Coding Quiz' Title
    titleText.remove();
    // Running a loop that will iterate over as many questions as we have
    for (var i = 0; i < questions.length; i++) {
        // Creating a new div for each question in our question array
        var newQuestion = document.createElement("div");
        newQuestion.setAttribute("class","newQuestion hide");
        // Creating a new h1 for each question
        var questionTitle = document.createElement("h1");
        questionTitle.setAttribute("class","questionTitle");
        // Setting the innerhtml of the h1 we created to = each question title;
        questionTitle.innerHTML = questions[i].question;
        // Injecting the h1 into our new div we created
        newQuestion.append(questionTitle);
        // injecting all the new divs we created onto the page, before the body element
        body.prepend(newQuestion);
        // Executing a function for each answer choice inside each question
        questions[i].choices.forEach(choice => {
            choices.children.innerHTML = choice;
        }) 
    } // Outside of the loop, we are getting all the new elements we created, and storing them into a new array
    var newQuestions = document.querySelectorAll(".newQuestion");
    // Setting the first question to show
    newQuestions[3].classList.remove("hide");
}
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