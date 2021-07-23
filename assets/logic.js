//GLOBAL VARIABLES 
//variabel to target html elements
var startButton = document.querySelector("#start");
var timerbox = document.querySelector("#timer");
var qustionBox = document.querySelector("#question");
var results = document.querySelector("results")

//variable to keep of time and score 
var timeLeft = 100;


//FUNCTIONS 
function startQuiz() {
    startTimer();
    startButton.setAttribute("class", "hide")
}


function startTimer() {
    //use innerText to put time left in timer box 
    timerbox.innerHTML = `
        <h3>time left: ${timeLeft}</h3>
    `
    timeLeft--;
}

var questions=[
    {
        question:'What college team is in Alabma?',
        choices: ['Alabama','Georgia','Miami','Tennesse'],
        correctAnswer:'Apples' 
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


function showResults() {

}

//Set interval to repeat start time every second 
window.setInterval(startTimer, 1000);

//EVENT LISTENERS 
