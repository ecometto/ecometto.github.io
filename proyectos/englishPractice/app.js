
let quizData = [
  {
    question: "¿Cómo se dice 'perro' en inglés?",
    options: ["Cat", "Dog", "Bird", "Fish"],
    correct: 1,
    level: 1
  },
  {
    question: "¿Cómo se dice 'casa' en inglés?",
    options: ["House", "Car", "Tree", "Book"],
    correct: 0,
    level: 1
  },
  {
    question: "¿Cómo se dice 'manzana' en inglés?",
    options: ["Banana", "Orange", "Apple", "Grape"],
    correct: 2,
    level: 1
  },
  {
    question: "¿Cómo se dice 'azul' en inglés?",
    options: ["Red", "Green", "Yellow", "Blue"],
    correct: 3,
    level: 1
  },
  {
    question: "¿Cómo se dice 'amigo' en inglés?",
    options: ["Enemy", "Friend", "Family", "Neighbor"],
    correct: 1,
    level: 1
  },
  {
    question: "¿Cómo se dice 'computadora' en inglés?",
    options: ["Computer", "Calculator", "Telephone", "Television"],
    correct: 0,
    level: 2
  },
  {
    question: "¿Cómo se dice 'felicidad' en inglés?",
    options: ["Sadness", "Happiness", "Anger", "Fear"],
    correct: 1,
    level: 2
  },
  {
    question: "¿Cómo se dice 'mariposa' en inglés?",
    options: ["Butterfly", "Dragonfly", "Firefly", "Housefly"],
    correct: 0,
    level: 3
  },
  {
    question: "¿Cómo se dice 'responsabilidad' en inglés?",
    options: ["Response", "Responsible", "Responsibility", "Responsive"],
    correct: 2,
    level: 4
  },
  {
    question: "¿Cómo se dice 'paradigma' en inglés?",
    options: ["Paradox", "Paradigm", "Paradise", "Paragraph"],
    correct: 1,
    level: 5
  }
];

let currentQuestion = 0;
let currentLevel = 1;
let isAdmin = false;
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const resultEl = document.getElementById("result");
const nextButton = document.getElementById("next");
const editQuestionsEl = document.getElementById("editQuestions");
const addQuestionButton = document.getElementById("addQuestion");
const saveQuestionsButton = document.getElementById("saveQuestions");
const editTabButton = document.getElementById("editTabButton");

function createSpeakerIcon() {
  const svg = SVG().size(24, 24);
  svg.path('M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z');
  return svg.node;
}

function loadQuestion() {
  const filteredQuestions = quizData.filter(q => q.level === currentLevel);
  if (filteredQuestions.length === 0) {
    questionEl.textContent = "No hay preguntas disponibles para este nivel.";
    optionsEl.innerHTML = "";
    resultEl.textContent = "";
    nextButton.style.display = "none";
    return;
  }

  if (currentQuestion >= filteredQuestions.length) {
    currentQuestion = 0;
  }

  const question = filteredQuestions[currentQuestion];
  questionEl.textContent = question.question;
  
  optionsEl.innerHTML = "";
  question.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "button";
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index, filteredQuestions));
    
    const speakerIcon = createSpeakerIcon();
    speakerIcon.classList.add("speaker-icon");
    speakerIcon.addEventListener("click", (e) => {
      e.stopPropagation();
      speakWord(option);
    });
    
    button.appendChild(speakerIcon);
    optionsEl.appendChild(button);
  });
  
  resultEl.textContent = "";
  nextButton.style.display = "none";
}

function selectOption(index, questions) {
  const question = questions[currentQuestion];
  const buttons = optionsEl.getElementsByTagName("button");
  
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
  
  if (index === question.correct) {
    resultEl.textContent = "¡Correcto!";
    resultEl.className = "correct";
    buttons[index].style.backgroundColor = "#4CAF50";
    createConfetti();
  } else {
    resultEl.textContent = "Incorrecto. La respuesta correcta es: " + question.options[question.correct];
    resultEl.className = "incorrect";
    buttons[index].style.backgroundColor = "#f44336";
    buttons[question.correct].style.backgroundColor = "#4CAF50";
    createEmojis();
  }
  
  nextButton.style.display = "block";
}

function speakWord(word) {
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = 'en-US';
  speechSynthesis.speak(utterance);
}

function createConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDelay = Math.random() * 3 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 3000);
  }
}

function createEmojis() {
  const emojis = ['😢', '😕', '🤔', '📚', '💡'];
  for (let i = 0; i < 20; i++) {
    const emoji = document.createElement('div');
    emoji.className = 'emoji';
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
  }
}

nextButton.addEventListener("click", () => {
  currentQuestion++;
  loadQuestion();
});

function renderQuestionEditor() {
  editQuestionsEl.innerHTML = "";
  quizData.forEach((question, index) => {
    const questionEditor = document.createElement("div");
    questionEditor.className = "question-editor";
    questionEditor.innerHTML = `
      <input type="text" value="${question.question}" placeholder="Pregunta">
      <input type="text" value="${question.options[0]}" placeholder="Opción 1">
      <input type="text" value="${question.options[1]}" placeholder="Opción 2">
      <input type="text" value="${question.options[2]}" placeholder="Opción 3">
      <input type="text" value="${question.options[3]}" placeholder="Opción 4">
      <select class="correct-answer">
        <option value="0" ${question.correct === 0 ? 'selected' : ''}>Opción 1</option>
        <option value="1" ${question.correct === 1 ? 'selected' : ''}>Opción 2</option>
        <option value="2" ${question.correct === 2 ? 'selected' : ''}>Opción 3</option>
        <option value="3" ${question.correct === 3 ? 'selected' : ''}>Opción 4</option>
      </select>
      <select class="question-level">
        <option value="1" ${question.level === 1 ? 'selected' : ''}>Fácil</option>
        <option value="2" ${question.level === 2 ? 'selected' : ''}>Intermedio-bajo</option>
        <option value="3" ${question.level === 3 ? 'selected' : ''}>Intermedio</option>
        <option value="4" ${question.level === 4 ? 'selected' : ''}>Intermedio-avanzado</option>
        <option value="5" ${question.level === 5 ? 'selected' : ''}>Avanzado</option>
      </select>
      <button class="button" onclick="removeQuestion(${index})">Eliminar</button>
    `;
    editQuestionsEl.appendChild(questionEditor);
  });
}

function addQuestion() {
  quizData.push({
    question: "",
    options: ["", "", "", ""],
    correct: 0,
    level: 1
  });
  renderQuestionEditor();
}

function removeQuestion(index) {
  quizData.splice(index, 1);
  renderQuestionEditor();
}

function saveQuestions() {
  const questionEditors = document.getElementsByClassName("question-editor");
  quizData = Array.from(questionEditors).map(editor => {
    const inputs = editor.getElementsByTagName("input");
    const correctSelect = editor.querySelector(".correct-answer");
    const levelSelect = editor.querySelector(".question-level");
    return {
      question: inputs[0].value,
      options: [inputs[1].value, inputs[2].value, inputs[3].value, inputs[4].value],
      correct: parseInt(correctSelect.value),
      level: parseInt(levelSelect.value)
    };
  });
  alert("Preguntas guardadas exitosamente!");
  currentQuestion = 0;
  loadQuestion();
}

function selectLevel(level) {
  currentLevel = level;
  currentQuestion = 0;
  document.getElementById("welcome").style.display = "none";
  document.getElementById("quizContent").style.display = "block";
  loadQuestion();
}

function openTab(evt, tabName) {
  var i, tabContent, tabButtons;
  tabContent = document.getElementsByClassName("tab-content");
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }
  tabButtons = document.getElementsByClassName("tab-button");
  for (i = 0; i < tabButtons.length; i++) {
    tabButtons[i].className = tabButtons[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";

  if (tabName === 'editTab') {
    renderQuestionEditor();
  } else if (tabName === 'quizTab') {
    loadQuestion();
  }
}

function loginAdmin() {
  const username = document.getElementById("adminUsername").value;
  const password = document.getElementById("adminPassword").value;
  
  // En un escenario real, aquí se haría una verificación segura contra un servidor
  if (username === "admin" && password === "admin") {
    isAdmin = true;
    editTabButton.style.display = "inline-block";
    document.getElementById("adminLogin").style.display = "none";
    alert("Inicio de sesión exitoso. Ahora puedes editar las preguntas.");
  } else {
    alert("Usuario o contraseña incorrectos.");
  }
}

addQuestionButton.addEventListener("click", addQuestion);
saveQuestionsButton.addEventListener("click", saveQuestions);

// Initialize the welcome screen
document.getElementById("quizContent").style.display = "none";
editTabButton.style.display = "none";
