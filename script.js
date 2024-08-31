let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;

const questions = [
    {
        question: "What is the capital of France?",
        options: {
            A: "Berlin",
            B: "Madrid",
            C: "Paris",
            D: "Rome"
        },
        correct: "C"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: {
            A: "Earth",
            B: "Mars",
            C: "Jupiter",
            D: "Saturn"
        },
        correct: "B"
    },
    {
        question: "What is the largest planet in our solar system?",
        options: {
            A: "Jupiter", 
            B: "Saturn", 
            C: "Mars", 
            D: "Earth"
        },
        correct: "A"
    },
    {
          question: "What is the most used programming language?",
          options:{
            A: "Java", 
            B: "C", 
            C: "Python", 
            D: "JavaScript"
        },
          correct: "D"
    },
    {
          question: "Who is the CEO of Tesla?",
          options: {
            A: "Jeff Bezos", 
            B: "Elon Musk", 
            C: "Bill Gates", 
            D: "Tony Stark"
          },
          correct: "B"
    },
];

function startQuiz() {
    timer = setInterval(updateTimer, 1000);
    displayQuestion();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById('time').textContent = timeLeft;
    } else {
        clearInterval(timer);
        endQuiz();
    }
}

function displayQuestion() {
    const questionEl = document.querySelector('.question');
    const optionsEl = document.querySelector('.options');

    questionEl.textContent = questions[currentQuestion].question;
    optionsEl.innerHTML = '';

    for (let key in questions[currentQuestion].options) {
        const optionButton = document.createElement('button');
        optionButton.textContent = `${key}. ${questions[currentQuestion].options[key]}`;
        optionButton.onclick = () => checkAnswer(optionButton, key);
        optionsEl.appendChild(optionButton);
    }
}

function checkAnswer(button, selectedOption) {
    const correctOption = questions[currentQuestion].correct;

    if (selectedOption === correctOption) {
        score++;
        button.style.backgroundColor = 'lightgreen';
    } else {
        button.style.backgroundColor = 'lightcoral';
    }

    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            displayQuestion();
        } else {
            endQuiz();
        }
    }, 1000);
}

function endQuiz() {
    clearInterval(timer);
    document.querySelector('.question').textContent = "Quiz Completed!";
    document.querySelector('.options').style.display = 'none';
    const resultEl = document.getElementById('result');
    resultEl.textContent = `Your score: ${score}/${questions.length}`;
    resultEl.classList.add('show');
}

// Start the quiz when the page loads
window.onload = startQuiz;
