const quizData = [
  {
    question: "O que é esquizofrenia?",
    options: [
      "Um tipo de depressão leve",
      "Um transtorno mental crônico que afeta a forma como a pessoa pensa, sente e se comporta",
      "Uma doença contagiosa",
      "Apenas uma fase emocional"
    ],
    answer: 1
  },
  {
    question: "Quais são sintomas comuns da esquizofrenia?",
    options: [
      "Delírios, alucinações e pensamento desorganizado",
      "Dores no corpo e febre alta",
      "Perda de memória e coordenação motora",
      "Tosse constante e espirros"
    ],
    answer: 0
  },
  {
    question: "A esquizofrenia tem cura?",
    options: [
      "Sim, com antibióticos",
      "Não, mas pode ser tratada com acompanhamento médico e medicação",
      "Sim, basta a pessoa querer melhorar",
      "Não existe tratamento"
    ],
    answer: 1
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");

  resultEl.textContent = "";

  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.textContent = option;
    button.onclick = () => checkAnswer(index);
    optionsEl.appendChild(button);
  });
}

function checkAnswer(selectedIndex) {
  const resultEl = document.getElementById("result");

  if (selectedIndex === quizData[currentQuestion].answer) {
    resultEl.textContent = "✅ Resposta correta!";
    score++;
  } else {
    resultEl.textContent = "❌ Resposta incorreta.";
  }

  setTimeout(() => {
    currentQuestion++;
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showFinalResult();
    }
  }, 1000);
}

function showFinalResult() {
  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");

  questionEl.textContent = "Quiz finalizado!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

// Inicializa o quiz
loadQuestion();
