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

## Questions screen

This screen displays questions and answer choices. 

- any wrong answer resulting in 10 seconds being removed from your time. 
- If you have less then 10 seconds left on the clock and you giva a wrong answer you will automatically be taken to the final score screen with a score of 0. 
- If you answer is correct you are moved onto the next question unless the last question has been reache, in which case you will be moved to the final score screen.

## Final Score Screen

This screen shows your final score which is the final time left and allows you to enter your initials and submit your score to highscores. On submission the page takes you to the Highscores page so you can see where you rank.

# Highscores Page

This screen show the top 5 high scores and gives the option of clearing all score data from local storage.