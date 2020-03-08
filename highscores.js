showHighScores()

function showHighScores () {
    // bring back local storage results or show empty highscores if navbar used before score storage
    var highscores = JSON.parse(window.localStorage.getItem("highscores")) || [];
    
    // sort highscores initials first then score(score is first item in object array initials is the second)
    highscores.sort((score, initials) => initials.score - score.score);

    //Only return the 5 highest scores
    highscores.splice(5);

    //create list elements for each score from stored content
    highscores.forEach(function(score) {
    var liEl = document.createElement("li");
    liEl.textContent = " " + score.initials + " - " + score.score;

    //add list elements to highscore ordered list on page
    var olEl = document.getElementById("highscores");
    olEl.appendChild(liEl);
  });
}

$("#clear").on("click", clearScores)

function clearScores(event) {
  window.localStorage.removeItem("highscores");
  window.location.reload();
}