// // styles

// var questionEl = document.querySelector(".questions")
// var aWrongEl = document.getElementById("wrong")
// var aWrongEl2 = document.getElementById("wrong2")
// var aWrongEl3 = document.getElementById("wrong3")
// var aRightEl = document.getElementById("right")
// var timeLeft = document.getElementById("time")
// var startButton = document.getElementById("button")





// var time = 60;


// setInterval(function () {
//     time--
//     timeLeft.textContent = time
//     if (time <= 10) {
//         timeLeft.setAttribute("style", "color:red;")
//     }
//     if (time === 0) {
//         setTimeout(() => { location.href = "./index.html"; }, 1000);

//     }
// }, 1000)
// function questions() {


//     function wrongAnswer() {

//         aWrongEl.addEventListener("click", function () {
//             aWrongEl.setAttribute("style", "background: red; width: 100%; transition: .35s;")
//             // setTimeout(() => { location.href = "./question2.html"; }, 500);

//             // moving html
//             setTimeout(() => { questionEl.setAttribute("style", "position:relative; right: 2000px;") }, 500);
//             time - 5;

//         });
//     }

//     function wrongAnswer2() {

//         aWrongEl2.addEventListener("click", function () {
//             aWrongEl2.setAttribute("style", "background: red; width: 100%; transition: .35s;")
//             setTimeout(() => { location.href = "./question2.html"; }, 500);
//             time - 5;
//         });
//     }

//     function wrongAnswer3() {

//         aWrongEl3.addEventListener("click", function () {
//             aWrongEl3.setAttribute("style", "background: red; width: 100%; transition: .35s;")
//             setTimeout(() => { location.href = "./question2.html"; }, 500);
//             time - 5;

//         });
//     }

//     function rightAnswer() {

//         aRightEl.addEventListener("click", function () {
//             aRightEl.setAttribute("style", "background: green; width: 100%; transition: .35s;")
//             setTimeout(() => { location.href = "./question2.html"; }, 500);

//         });
//     }



//     // time()
//     rightAnswer()
//     wrongAnswer()
//     wrongAnswer2()
//     wrongAnswer3()
// };



// // with JS create li elements, and set their value to the relevent object

// questions();


// var questions = [
//     {
//         question: "Commonly used data types DO NOT include:",
//         a1: "strings",
//         a2: "numbers",
//         a3: "alerts",
//         a4: "boolens",
//     }

// ]

