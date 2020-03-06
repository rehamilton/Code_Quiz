var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#timer")



startButton.addEventListener("click", startQuiz)



var time = 75
var counter

// timer down by 1 unless less than or equal to 0 when it should stop the quiz
function runTimer () {
    
    time--;
    timerEl.textContent = time;

    if(time <= 0) {
        //stop quiz function
    }
    
}

//Move from landing screen to questions screen
function startQuiz () {

    //hide start screen
    var landingScreen = document.getElementById("landing-title");
    landingScreen.setAttribute("class", "hide");

    //hide start button
    var startButton = document.getElementById("start-button");
    startButton.setAttribute("class", "hide");

    //unhide questions
    var questionScreen = document.getElementById("questions-container");
    questionScreen.setAttribute("class", "row unhide");

    //unhide timer
    var timer = document.getElementById("timer-container");
    timer.setAttribute("class", "row unhide");

    //set timer
    timerEl.textContent=time;

    //run timer
    setInterval(runTimer, 1000);
    
}

//Move through Questions
function takeQuiz() {
    
    for(i=0; i<questions.length; i++) {

    }
}


//stop quiz function



//action on click of right/wrong question

// take away 10 seconds


//move to highscores page

//submit button for highscore page


//bring in any stored highscores

//store results to local storage

