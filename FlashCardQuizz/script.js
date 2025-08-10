let flashcards = [
  { question: "What is HTML?", answer: "HyperText Markup Language" },
  { question: "What is CSS?", answer: "Cascading Style Sheets" }
];

let currentIndex = 0;
const front = document.getElementById("card-front");
const back = document.getElementById("card-back");

function showCard(index) {
  front.textContent = flashcards[index].question;
  back.textContent = flashcards[index].answer;
  back.classList.add("hidden");
}

function toggleAnswer() {
  back.classList.toggle("hidden");
}

function nextCard() {
  if (currentIndex < flashcards.length - 1) {
    currentIndex++;
    showCard(currentIndex);
  }
}

function prevCard() {
  if (currentIndex > 0) {
    currentIndex--;
    showCard(currentIndex);
  }
}

function addFlashcard() {
  const q = document.getElementById("newQuestion").value;
  const a = document.getElementById("newAnswer").value;
  if (q && a) {
    flashcards.push({ question: q, answer: a });
    currentIndex = flashcards.length - 1;
    showCard(currentIndex);
    document.getElementById("newQuestion").value = "";
    document.getElementById("newAnswer").value = "";
  }
}

function editFlashcard() {
  const q = prompt("Edit Question:", flashcards[currentIndex].question);
  const a = prompt("Edit Answer:", flashcards[currentIndex].answer);
  if (q && a) {
    flashcards[currentIndex] = { question: q, answer: a };
    showCard(currentIndex);
  }
}

function deleteFlashcard() {
  if (flashcards.length > 1) {
    flashcards.splice(currentIndex, 1);
    currentIndex = Math.max(0, currentIndex - 1);
    showCard(currentIndex);
  } else {
    alert("At least one flashcard is required!");
  }
}

// Show first card when page loads
showCard(currentIndex);
