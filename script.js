let points = Number(localStorage.getItem("smartPoints")) || 0;

let current = 0;
let score = 0;
let selectedSubject = "";

const questions = {

math: [
{
q: "What is 5 + 7?",
a: ["10", "12", "14", "15"],
correct: 1
},
{
q: "What is 9 × 3?",
a: ["18", "21", "27", "30"],
correct: 2
},
{
q: "What is 100 - 45?",
a: ["45", "55", "65", "75"],
correct: 1
}
],

english: [
{
q: "Which word is correctly spelt?",
a: ["Becaus", "Because", "Becose", "Becouse"],
correct: 1
},
{
q: "What is the opposite of happy?",
a: ["Joyful", "Sad", "Excited", "Glad"],
correct: 1
},
{
q: "Which is a noun?",
a: ["Run", "Beautiful", "School", "Quickly"],
correct: 2
}
],

science: [
{
q: "Which organ pumps blood?",
a: ["Brain", "Heart", "Lungs", "Kidney"],
correct: 1
},
{
q: "What do plants need to make food?",
a: ["Sunlight", "Plastic", "Sand only", "Oil"],
correct: 0
},
{
q: "Which planet do we live on?",
a: ["Mars", "Venus", "Earth", "Jupiter"],
correct: 2
}
],

knowledge: [
{
q: "What is the capital of Nigeria?",
a: ["Lagos", "Abuja", "Kano", "Ibadan"],
correct: 1
},
{
q: "How many days are in a week?",
a: ["5", "6", "7", "8"],
correct: 2
},
{
q: "Which animal is known as the king of the jungle?",
a: ["Elephant", "Lion", "Monkey", "Zebra"],
correct: 1
}
]

};

function updatePoints() {

document.getElementById("points").textContent = points;

document.getElementById("totalPoints").textContent = points;

localStorage.setItem("smartPoints", points);

}

updatePoints();

function showSubjects() {

document.getElementById("subjects").scrollIntoView({
behavior: "smooth"
});

}

function startQuiz(subject) {

selectedSubject = subject;

current = 0;
score = 0;

document.getElementById("subjects").style.display = "none";

document.getElementById("quiz").style.display = "block";

document.getElementById("quizTitle").textContent =
subject.toUpperCase() + " CHALLENGE";

loadQuestion();

window.scrollTo(0, 0);

}

function loadQuestion() {

let q = questions[selectedSubject][current];

document.getElementById("questionNumber").textContent =
"Question " + (current + 1) + " of " +
questions[selectedSubject].length;

document.getElementById("question").textContent = q.q;

document.getElementById("feedback").textContent = "";

document.getElementById("nextBtn").hidden = true;

let answerBox = document.getElementById("answers");

answerBox.innerHTML = "";

q.a.forEach((answer, index) => {

let btn = document.createElement("button");

btn.textContent = answer;

btn.className = "option";

btn.onclick = () => checkAnswer(index, btn);

answerBox.appendChild(btn);

});

}

function checkAnswer(index, button) {

let q = questions[selectedSubject][current];

let buttons = document.querySelectorAll(".option");

buttons.forEach(btn => btn.disabled = true);

if(index === q.correct) {

score++;

points += 10;

updatePoints();

button.classList.add("correct");

document.getElementById("feedback").textContent =
"🎉 Excellent! Correct answer! +10 points";

} else {

button.classList.add("wrong");

buttons[q.correct].classList.add("correct");

document.getElementById("feedback").textContent =
"Good try! Keep learning. 🌟";

}

document.getElementById("nextBtn").hidden = false;

}

function nextQuestion() {

current++;

if(current < questions[selectedSubject].length) {

loadQuestion();

} else {

finishQuiz();

}

}

function finishQuiz() {

document.getElementById("question").textContent =
"🎉 Quiz Completed!";

document.getElementById("questionNumber").textContent =
"Your score: " + score + "/3";

document.getElementById("answers").innerHTML = "";

document.getElementById("feedback").textContent =
"Wonderful effort! Keep practising and learning!";

document.getElementById("nextBtn").hidden = true;

let btn = document.createElement("button");

btn.textContent = "Back to Academy";

btn.onclick = goHome;

document.getElementById("answers").appendChild(btn);

}

function goHome() {

document.getElementById("quiz").style.display = "none";

document.getElementById("subjects").style.display = "block";

window.scrollTo(0, 0);

    }
