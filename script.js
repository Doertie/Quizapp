let rendomNum = 0;

function renderQuestion() {
  let refGermanWord = document.getElementById('germanWord');
  let germanWord = vocabulary_db[rendomNum].germenWord;

  refGermanWord.innerHTML = germanWord;
  rendomNum = Math.floor(Math.random() * vocabulary_db.length);
}

function submitAnswer() {
  let refEnglishWord = document.getElementById('englishWord');
  let refShipShoot = document.getElementById('spaceShipShoot');
  let refInvaderShoot = document.getElementById('invaderShoot');

  if (refEnglishWord.value == vocabulary_db[rendomNum].englishWord) {
    spaceShipShoot(refShipShoot);
  } else {
    invaderShoot(refInvaderShoot);
  }
}

function spaceShipShoot(shipShoot) {
  shipShoot.classList.add('spaceship_shoot');
  shipShoot.style.animation = "shipShoot 1s";

  setTimeout(() => {
    shipShoot.classList.remove('spaceship_shoot');
    shipShoot.style.animation = "";
    renderQuestion();
  }, 1000);
  console.log('that was right');
}

function invaderShoot(invaderShoot) {
  invaderShoot.classList.add('invader_shoot');
  invaderShoot.style.animation = "invaderShoot 1s";

  setTimeout(() => {
    invaderShoot.classList.remove('invader_shoot');
    invaderShoot.style.animation = "";
    renderQuestion();
  }, 1000);
  console.log('that was not correct');
}
