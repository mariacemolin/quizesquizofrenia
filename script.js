const quizData = [
  {
    question: "O que é esquizofrenia?",
    options: [
      "Um transtorno mental crônico que afeta pensamentos e comportamentos",
      "Uma gripe forte com sintomas emocionais",
      "Um tipo de dor muscular",
      "Um distúrbio digestivo"
    ],
    answer: 0
  },
  {
    question: "Quais são sintomas típicos da esquizofrenia?",
    options: [
      "Alucinações, delírios e fala desorganizada",
      "Febre, tosse e dores nas costas",
      "Fome constante e dor de cabeça",
      "Perda de cabelo e visão turva"
    ],
    answer: 0
  },
  {
    question: "Qual é a faixa etária mais comum para o início da esquizofrenia?",
    options: [
      "Infância (3 a 10 anos)",
      "Adolescência e início da vida adulta",
      "Idade avançada (acima dos 65)",
      "Entre os 5 e 7 anos"
    ],
    answer: 1
  },
  {
    question: "A esquizofrenia pode ser tratada com:",
    options: [
      "Cirurgia",
      "Exercício físico apenas",
      "Medicação, psicoterapia e suporte familiar",
      "Chás e massagens relaxantes"
    ],
    answer: 2
  },
  {
    question: "O que são alucinações auditivas?",
    options: [
      "Ouvir vozes que não existem na realidade",
      "Ficar com dor de ouvido",
      "Ruídos causados por fones de ouvido",
      "Conversas paralelas em lugares públicos"
    ],
    answer: 0
  },
  {
    question: "A esquizofrenia afeta:",
    options: [
      "Somente o corpo",
      "Apenas os olhos",
      "A forma como a pessoa pensa, sente e age",
      "O sistema digestivo"
    ],
    answer: 2
  },
  {
    question: "Pessoas com esquizofrenia podem ter uma vida funcional?",
    options: [
      "Sim, com tratamento adequado e apoio",
      "Não, nunca",
      "Apenas em hospitais psiquiátricos",
      "Apenas com isolamento total"
    ],
    answer: 0
  },
  {
    question: "Quais fatores podem contribuir para o desenvolvimento da esquizofrenia?",
    options: [
      "Genética, ambiente e alterações químicas no cérebro",
      "Má alimentação",
      "Uso de celular em excesso",
      "Falta de sono por uma noite"
    ],
    answer: 0
  },
  {
    question: "Esquizofrenia é o mesmo que transtorno bipolar?",
    options: [
      "Sim",
      "Não, são transtornos diferentes",
      "Sim, apenas com nomes diferentes",
      "Depende do caso"
    ],
    answer: 1
  },
  {
    question: "O que são delírios?",
    options: [
      "Pensamentos baseados na realidade",
      "Fantasias conscientes",
      "Crenças falsas que persistem mesmo sem evidência",
      "Sonhos durante o sono"
    ],
    answer: 2
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

  questionEl.textContent = "🎉 Quiz Finalizado!";
  optionsEl.innerHTML = "";
  resultEl.textContent = `Você acertou ${score} de ${quizData.length} perguntas.`;
}

// Inicia o quiz
loadQuestion();
