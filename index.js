let homePoints = 0;
let guestPoints = 0;

function addOneHome() {
  homePoints += 1;
  document.getElementById("home-score").textContent = homePoints;
}
function addTwoHome() {
  homePoints += 2;
  document.getElementById("home-score").textContent = homePoints;
}

function addThreeHome() {
  homePoints += 3;
  document.getElementById("home-score").textContent = homePoints;
}

function addOneGuest() {
  guestPoints += 1;
  document.getElementById("guest-score").textContent = guestPoints;
}
function addTwoGuest() {
  guestPoints += 2;
  document.getElementById("guest-score").textContent = guestPoints;
}

function addThreeGuest() {
  guestPoints += 3;
  document.getElementById("guest-score").textContent = guestPoints;
}
