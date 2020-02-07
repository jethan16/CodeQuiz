var time = 60;
var timeLeft = document.getElementById("time")
var IntervalId;





var mainContent = document.getElementById('main')
var myQuestions = [
    {
        question: "Which of these is NOT a commonly used data type?",

        answers: [
            "numbers",
            "strings",
            "alerts",
            "booleans"
        ],

        correctAnswer: "alerts"
    },

    {
        question: "Who invented JavaScript?",

        answers: [
            "Mason Stafford",
            "Dan Droppa",
            "Brendan Eich",
            "Kevin Parmar"
        ],

        correctAnswer: "Brendan Eich"
    },

    {
        question: "Whats our teacher's name?",

        answers: [
            "Geoff Huffmen",
            "Jeff Hoffman",
            "Jefe Hoofmean",
            "Jerry Garcia"
        ],

        correctAnswer: "Jeff Hoffman"
    },

    {
        question: "What's the proper syntax for a variable?",

        answers: [
            "variable = myVar",
            "var myVar = #",
            "myVar = var",
            "varvar binks"
        ],

        correctAnswer: "var myVar = #"
    }
]

startQuiz()
function startQuiz() {
    var startButton = document.getElementById('startbutton')
    startButton.addEventListener('click', function () {
        question()
        timer()
    })

}


function timer() {

    IntervalId = setInterval(function () {
        time--
        timeLeft.textContent = time
        if (time <= 10) {
            timeLeft.setAttribute("style", "color:red;")
        }
        if (time === 0) {
            setTimeout(() => { location.href = "./index.html"; }, 1000);
        }
    }, 1000)
}
var count = 0

function question() {


    console.log(count)
    console.log(myQuestions)
    mainContent.innerHTML = ""
    var qEl = document.createElement("h3");
    qEl.textContent = myQuestions[count].question;
    qEl.classList.add("question")
    mainContent.appendChild(qEl);
    var divEl = document.createElement("div");


    for (var i = 0; i < 4; i++) {
        var aEl = document.createElement("h5");
        divEl.setAttribute("id", i);
        mainContent.appendChild(divEl)
        aEl.textContent = myQuestions[count].answers[i];
        aEl.classList.add("answers")
        divEl.appendChild(aEl);
    }

    divEl.addEventListener("click", checker)
}

function checker(event) {

    count++;
    // console.log(answer)
    console.log(event.target.textContent)
    console.log(`COUNT: ${count}`);
    console.log("LENGTH: " + myQuestions.length);


    if (count === myQuestions.length) {
        endOfGame()
        // location.href = "./highScores.html"

    } else if (event.target.matches("h5")) {
        console.log(myQuestions[count].correctAnswer)
        if (event.target.textContent === myQuestions[count].correctAnswer) {
        } else {
            console.log(time)
            time = time - 10;
            console.log(time)
        }

        question()
        
        console.log("i got clicked.")
        // console.log(count)
    }
}


// console.log(count)
console.log(myQuestions)

function endOfGame() {
    var allScores = JSON.parse(localStorage.getItem("highscores"))
    if (!allScores) allScores = []
    clearInterval(IntervalId);

    mainContent.innerHTML = ""
    var submit = document.getElementById("submitScore")
    submit.classList.remove("hide")

    var submitButton = document.getElementById("submitScoreButton")
    submitButton.addEventListener("click", function () {
        event.preventDefault()
        var score = { score: time, name: document.getElementById("playerName").value.trim() };
        allScores.push(score)
        localStorage.setItem("highscores", JSON.stringify(allScores))
        window.location.assign("highScores.html")
        // ranking()
    })
}

function ranking() {
    var rankingEl = document.getElementById("ranking");
    var allScores = JSON.parse(localStorage.getItem("highscores"))

    allScores.sort(function (a, b) { return b.score - a.score });
    for (var i = 0; i < 5; i++) {
        var rank = document.createElement("h3");
        rank.textContent = allScores[i].name + ": " + allScores[i].score;
        rankingEl.appendChild(rank);
    }
}

