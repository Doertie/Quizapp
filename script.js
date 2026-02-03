let rendomIndexNum = 0;
let spaceShipHP = 200;
let invaderHP = 200;

function renderQuestion() {
  let refGermanWord = document.getElementById('germanWord');
  let germanWord = vocabulary_db[rendomIndexNum].germenWord;

  refGermanWord.innerHTML = germanWord;
  rendomIndexNum = Math.floor(Math.random() * vocabulary_db.length);
  renderHP()
}

function submitAnswer() {
  let refEnglishWord = document.getElementById('englishWord');
  let refShipShoot = document.getElementById('spaceShipShoot');
  let refInvaderShoot = document.getElementById('invaderShoot');
  let message = document.getElementById('message');

  message.innerHTML = '';
  if (refEnglishWord.value == vocabulary_db[rendomIndexNum].englishWord) {
    spaceShipShoot(refShipShoot, message);
  } else {
    invaderShoot(refInvaderShoot, message);
  }
}

function spaceShipShoot(shipShoot, message) {
  shipShoot.classList.add('spaceship_shoot');
  shipShoot.style.animation = "shipShoot 0.5s ease-in";

  setTimeout(() => {
    shipShoot.classList.remove('spaceship_shoot');
    shipShoot.style.animation = "";
    message.innerHTML = '!CORRECT!';
    invaderHP -= 100;
    if (invaderHP == 0) lvlUP(message);
    renderQuestion();
  }, 600);
}

function invaderShoot(invaderShoot, message) {
  invaderShoot.classList.add('invader_shoot');
  invaderShoot.style.animation = "invaderShoot 0.5s ease-in";

  setTimeout(() => {
    invaderShoot.classList.remove('invader_shoot');
    invaderShoot.style.animation = "";
    message.innerHTML = '!NCORRECT!';
    spaceShipHP -= 100;
    if (spaceShipHP == 0) gameOverSeq();
    renderQuestion();
  }, 600);
}

function renderHP() {
  let refSpaceShipHP = document.getElementById('spaceShipHP');
  let refInvaderHP = document.getElementById('invaderHP');

  refSpaceShipHP.innerHTML = spaceShipHP + 'HP';
  refInvaderHP.innerHTML = invaderHP + 'HP';

}

function lvlUP(message) {
  message.innerHTML = 'LVL++';
}

function gameOverSeq() {
  let refMessage = document.getElementById('message');
  let refLockSubmit = document.getElementById('vocabulary');

  refMessage.innerHTML = 'GAME OVER';
  setTimeout(() => {
    location.reload();
  }, 2000);
}
