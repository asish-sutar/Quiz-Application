function startQuiz() {
  document.getElementById("startContainer").style.display = "none";
  document.querySelector(".question-container1").style.display = "block";
  document.querySelector(".options1").style.display = "block";
}

function checkAnswer(questionNumber) {
  const options = document.querySelectorAll(
    `.options${questionNumber} .option`
  );
  options.forEach((option) => {
    const input = option.querySelector("input");
    if (input.checked) {
      if (option.dataset.correct === "true") {
        option.classList.add("correct");
      } else {
        option.classList.add("incorrect");
      }
    }
  });

  // Hide the current question container
  document.querySelector(`.question-container${questionNumber}`).style.display =
    "none";

  // If there is another question, show it
  if (questionNumber < 4) {
    document.querySelector(
      `.question-container${questionNumber + 1}`
    ).style.display = "block";
    document.querySelector(`.options${questionNumber + 1}`).style.display =
      "block";
  } else {
    // Show the result container
    showResult();
  }
}

function showResult() {
  // Calculate the score
  const correctAnswers = document.querySelectorAll(".correct").length;
  const totalQuestions = 4;
  const score = (correctAnswers / totalQuestions) * 100;

  // Display the score
  document.getElementById("score").textContent = `${score}%`;

  // Show the result container
  document.getElementById("resultContainer").style.display = "block";
}

function reviewQuestions() {
  alert(
    " Question 1: What is Truncation in Java?\nCorrect Answer: Floating-point value assigned to an integer type\n\nQuestion 2: Which of the following is not a Java feature?\nCorrect Answer: Use of pointers\n\nQuestion 3: Which keyword is used for the block to be examined for exceptions?\nCorrect Answer: try\n\nQuestion 4: Which one of the following is not an access modifier?\nCorrect Answer: Void"
  );
}
//============================================Python Logic====================
function startPythonQuiz() {
  document.getElementById("startContainer").style.display = "none";
  document.querySelector(".question-container5").style.display = "block";
  document.querySelector(".options5").style.display = "block";
}

function checkPythonAnswer(questionNumber) {
  const options = document.querySelectorAll(
    `.options${questionNumber} .option`
  );
  options.forEach((option) => {
    const input = option.querySelector("input");
    if (input.checked) {
      if (option.dataset.correct === "true") {
        option.classList.add("correct");
      } else {
        option.classList.add("incorrect");
      }
    }
  });

  // Hide the current question container
  document.querySelector(`.question-container${questionNumber}`).style.display =
    "none";

  // If there is another question, show it
  if (questionNumber < 8) {
    document.querySelector(
      `.question-container${questionNumber + 1}`
    ).style.display = "block";
    document.querySelector(`.options${questionNumber + 1}`).style.display =
      "block";
  } else {
    // Show the result container
    showPythonResult();
  }
}

function showPythonResult() {
  // Calculate the score
  const correctAnswers = document.querySelectorAll(".correct").length;
  const totalQuestions = 4;
  const score = (correctAnswers / totalQuestions) * 100;

  // Display the score
  document.getElementById("score").textContent = `${score}%`;

  // Show the result container
  document.getElementById("resultContainer1").style.display = "block";
}

function reviewPythonQuestions() {
  alert(
    "Question 5: What is the main purpose of using the 'if' statement in Python?\nCorrect Answer: Make decisions based on conditions\n\nQuestion 6: What is the correct way to comment multiple lines in Python?\nCorrect Answer: ''' This is a comment '''\n\nQuestion 7: Which of the following is the correct way to round a number to two decimal places in Python?\nCorrect Answer: round(number, ndigits=2)\n\nQuestion 8: What is the output of the following code snippet?\nCorrect Answer: 25"
  );
}
