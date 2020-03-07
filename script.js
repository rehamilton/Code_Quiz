var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#timer")
var questionEl = document.getElementById("question-text")
var answerButtonEl = document.querySelector("#answer-buttons")

var questionIndex = 0
var time = 75
var counter
var index = 0

//activate start button on click

$("#start").on("click", startQuiz)

// set timer to decrement by 1 every interval and stop quiz when at 0
function runTimer () {
    
    time--;
    timerEl.textContent = time;

    if(time <= 0) {
        //stop quiz function
        stopQuiz()
    };
    
};

//Move from landing screen to questions screen
function startQuiz () {

    //hide start screen
    $("#landing-title").addClass("hide");
   
    //hide start button
    $("#start-button").addClass("hide");

    //unhide questions
    $("#questions-container").addClass("unhide");    

    //unhide timer
    $("#timer-container").addClass("unhide");    

    //set timer
    timerEl.textContent=time;

    //run timer at interval 1 second
    setInterval(runTimer, 1000);

    setQuestion()
    
};

//Show question and answer choices
function setQuestion() {
    var question = questions[index];
    $("#question-text").text(question.question);
    $("#btnA").text(question.answers[0].text);
    $("#btnB").text(question.answers[1].text);
    $("#btnC").text(question.answers[2].text);
    $("#btnD").text(question.answers[3].text);

};

//show whether right or wrong (if wrong -15seconds) move to next question

$("#answer-buttons").on("click", selectAnswer)


function selectAnswer(event) {
    var whichbtn = event.target.textContent;
    var answer = whichbtn.text;
    console.log(whichbtn);
    console.log(answer);
    console.log("random");

    
    
    setNextQuestion()
    

};

function setNextQuestion (){
    index++;

    if(index>3){
        stopQuiz ()
    }
    else{
        setQuestion(index);
    };
}

function checkAnswer(){

}

function stopQuiz(){
    window.location.replace("index.html");
}

//stop quiz function



//action on click of right/wrong question

// take away 10 seconds


//move to highscores page

//submit button for highscore page


//bring in any stored highscores

//store results to local storage

