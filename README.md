# Code_Quiz

A coding quiz was created following the below acceptance criteria set out in the homework. 

Below this I have broken down how the javascript works to achieve the acceptance criteria.

## Reference - Generate Password Requirements 

For reference, the following requirements were set out in the homework.

## Acceptance Criteria

```
GIVEN I am taking a code quiz
WHEN I click the start button
THEN a timer starts and I am presented with a question
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score
```

# Solution Guide

## Overall Process

Below is a flowdiagram of the overall process.

![markdownAssets/Overall_Process.png](https://github.com/rehamilton/Code_Quiz/blob/master/markdownAssets/Overall_Process.PNG "Overall Process")

# Main Page

## Welcome Screen

A welcome screen describing the quiz and the consequences of a wrong answer. Contains a start quiz button that, once clicked, moves you to the questions screen.

![markdownAssets/startQuiz.png](https://github.com/rehamilton/Code_Quiz/blob/master/markdownAssets/startQuiz.PNG "Start Quiz")

## Questions & Final Scores screen

This screen displays questions and answer choices and rund through the below logic before moving to the Highscores page

![markdownAssets/Quiz.png](https://github.com/rehamilton/Code_Quiz/blob/master/markdownAssets/Quiz.PNG "Quiz")


# Highscores Page

This screen show the top 5 high scores and gives the option of clearing all score data from local storage.