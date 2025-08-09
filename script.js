let logList = document.getElementById("logList");
let summaryDiv = document.getElementById("summary");

let fitnessData = JSON.parse(localStorage.getItem("fitnessData")) || [];

function updateUI() {
  logList.innerHTML = "";
  let totalCalories = 0;
  let totalMinutes = 0;

  fitnessData.forEach((entry, index) => {
    let li = document.createElement("li");
    li.textContent = `${entry.exercise} - ${entry.duration} mins - ${entry.calories} cal`;
    logList.appendChild(li);

    totalCalories += parseInt(entry.calories);
    totalMinutes += parseInt(entry.duration);
  });

  summaryDiv.innerHTML = `
    <strong>Total Time:</strong> ${totalMinutes} mins<br>
    <strong>Total Calories:</strong> ${totalCalories} cal
  `;

  localStorage.setItem("fitnessData", JSON.stringify(fitnessData));
}

document.getElementById("fitnessForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let exercise = document.getElementById("exercise").value;
  let duration = document.getElementById("duration").value;
  let calories = document.getElementById("calories").value;

  fitnessData.push({ exercise, duration, calories });

  updateUI();

  // Clear form
  this.reset();
});

// Load data on startup
updateUI();
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('service-worker.js').then(function() {
      console.log("Service Worker Registered!");
    });
  });
}
