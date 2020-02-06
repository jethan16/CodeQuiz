ranking()
// clearScores()

function ranking() {
    var rankingEl = document.getElementById("ranking");
    var allScores = JSON.parse(localStorage.getItem("highscores"))
    console.log(allScores)
    if(allScores){

        allScores.sort(function (a, b) { return b.score - a.score });
        for (var i = 0; i < allScores.length; i++) {
            var rank = document.createElement("h3");
            rank.textContent = allScores[i].name + ": " + allScores[i].score;
            rankingEl.appendChild(rank);
        }
    }else rankingEl.innerHTML= "<h2> No Highscores!</h2>"
}


var clear = document.getElementById("clearScores");
clear.addEventListener("click", function () {
    localStorage.clear()
    ranking()
})

