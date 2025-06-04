<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Quiz sobre Esquizofrenia</title>
  <style>
    body {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      background: linear-gradient(to right, #4facfe, #00f2fe);
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      color: #fff;
    }

    .container {
      background-color: rgba(0, 0, 50, 0.8);
      padding: 30px;
      border-radius: 15px;
      width: 90%;
      max-width: 600px;
      text-align: center;
      box-shadow: 0 0 20px rgba(0,0,0,0.3);
    }

    h1 {
      margin-bottom: 10px;
    }

    .question {
      margin: 20px 0;
      font-size: 1.2em;
    }

    .options button {
      background-color: #00c3ff;
      border: none;
      color: white;
      padding: 10px 15px;
      margin: 5px;
      border-radius: 8px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .options button:hover {
      background-color: #007acc;
    }

    .result {
      margin-top: 20px;
      font-size: 1.3em;
      font-weight: bold;
    }

    footer {
      margin-top: 30px;
      font-size: 0.9em;
      color: #ccc;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Quiz sobre Esquizofrenia</h1>
    <p>Teste seus conhecimentos!</p>

    <div class="question" id="question">Carregando pergunta...</div>
    <div class="options" id="options"></div>
    <div class="result" id="result"></div>

    <footer>
      Desenvolvido por: Isabelly, Sarah, Maria, Murilo e Geovana 💙
    </footer>
  </div>

  <script>
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
