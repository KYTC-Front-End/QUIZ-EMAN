var highscoresList = document.querySelector("#HSlist");
var highScoreArray = JSON.parse(localStorage.getItem("highScoreArray")) || [];

var addUser = JSON.parse(localStorage.getItem("newHighScoreAdded"));

if (addUser) {
    saveArray(addUser);
    listItem();
    localStorage.removeItem("newHighScoreAdded");
} else {
    listItem();
}

function saveArray(scoreEntry) {
    highScoreArray.push(scoreEntry);
    highScoreArray.sort(function (a, b) { return b.newScore - a.newScore });
    localStorage.setItem("highScoreArray", JSON.stringify(highScoreArray));
}

function listItem() {
    for (i = 0; i < highScoreArray.length; i++) {
        var newlistItem = document.createElement("li");
        newlistItem.appendChild(document.createTextNode(`${highScoreArray[i].userName} --- ${highScoreArray[i].newScore}`));
        highscoresList.appendChild(newlistItem);
    }
}