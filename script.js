var startButton = document.querySelector("#start")
var timerEl = document.querySelector("#timer")
var questionEl = document.getElementById("question-text")
var answerButtonEl = document.querySelector("#answer-buttons")


var time = 75
var counter
var index = 0

//activate start button on click and run startQuiz function
$("#start").on("click", startQuiz)

// set timer to decrement by 1 every interval and stop quiz when at 0
function runTimer () {
    
    time--;
    timerEl.textContent = time;
    
    if(time <= 0) {
        //stop quiz function
        stopQuizFail()
    };
    
};

//Move from landing screen to questions screen
function startQuiz () {

    //hide start screen
    $("#landing-title").addClass("hide");
   
    //hide start button
    $("#start-button").addClass("hide");

    //unhide questions
    $("#questions-container").removeClass("hide");    

    //unhide timer
    $("#timer-container").removeClass("hide");    

    //set timer
    timerEl.textContent=time;

    //run timer at interval 1 second
    counter = setInterval(runTimer, 1000);

    setQuestion()
    
};

//Show question and answer choices
function setQuestion() {
    
    var question = questions[index];
    //enter object data into html
    $("#question-text").text(question.question);
    $("#btnA").text(question.answers[0]);
    $("#btnB").text(question.answers[1]);
    $("#btnC").text(question.answers[2]);
    $("#btnD").text(question.answers[3]);
};

//when an answer button is clicked check if the answer is correct
$("#answer-buttons").on("click", checkAnswer)

// check if the answer is correct or not and take appropraite action
function checkAnswer(event,) {
    //retrieve the text of the answer button chosen
    var whichbtn = event.target.textContent;
    
    //retrieve the text of the answer from the questions object
    correctAnswer = questions[index].answer 
    
    //if the answer chosen matches the answer within the questions object then set next questions index
    if (whichbtn === correctAnswer){
        setNextQuestionIndex()
    }
    //if the answer is not correct and there is less than 10 seconds on the clock show the end screen with a score of 0
    else if((time-10)<=0){
       stopQuizFail()
    }
    //if the answer is not correct and the above does not apply take 10 seconds from the time and set the next question index
    else{     
       time = time-10
       setNextQuestionIndex()
    }

};

//Move to the next question index
function setNextQuestionIndex (){
    
    //increase index reference by 1
    index++;

    //if index reaches the end then stop the quiz
    if(index === questions.length){
        stopQuiz()
    }
    //if index is within parameters pass index through to the set question function
    else{
        setQuestion(index);
    };
}


function stopQuiz(){

    //stop the clock
    clearInterval(counter)
    
    //hide questions
    $("#questions-container").addClass("hide");    

    //hide timer
    $("#timer-container").addClass("hide");

    //unhide score container
    $("#score-container").removeClass("hide");

    //show final score which is time left on clock
    $("#final-score").text(time)

}

function stopQuizFail(){

    //stop the clock
    clearInterval(counter)
    
    //hide questions
    $("#questions-container").addClass("hide");    

    //hide timer
    $("#timer-container").addClass("hide");

    //unhide score container
    $("#score-container").removeClass("hide");

    //show final score of 0
    $("#final-score").text("0")

}

//stop quiz function



//action on click of right/wrong question

// take away 10 seconds


//move to highscores page

//submit button for highscore page


//bring in any stored highscores

//store results to local storage

