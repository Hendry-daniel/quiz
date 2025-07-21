const questions = [
  {
    question: "What does HTML stand for?",
    answers: ["Hyper Text Markup Language", "High Tech Modern Language", "Hyperlink Machine Language"],
    correct: 0
  },
  {
    question: "Which language is used for styling web pages?",
    answers: ["HTML", "JQuery", "CSS"],
    correct: 2
  },
  {
    question: "What does JS stand for?",
    answers: ["Java Structure", "JavaScript", "Just Script"],
    correct: 1
  }
];

let current = 0;
let score = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextBtn = document.getElementById('next-btn');
const scoreEl = document.getElementById('score');

function loadQuestion() {
  const q = questions[current];
  questionEl.textContent = q.question;
  answersEl.innerHTML = "";
  q.answers.forEach((answer, i) => {
    const li = document.createElement("li");
    const btn = document.createElement("button");
    btn.textContent = answer;
    btn.onclick = () => {
      if (i === q.correct) score++;
      current++;
      if (current < questions.length) loadQuestion();
      else showScore();
    };
    li.appendChild(btn);
    answersEl.appendChild(li);
  });
}

function showScore() {
  questionEl.textContent = "Quiz Complete!";
  answersEl.innerHTML = "";
  nextBtn.style.display = "none";
  scoreEl.textContent = `Your score: ${score} / ${questions.length}`;
}

loadQuestion();