let rendomIndexNum = 0;
let invaderHP = 300;
let spaceShipHP = 500;
let spaceShipLVL = 1;
let spaceShipLVLup = 200;

function renderQuestion() {
  let refGermanWord = document.getElementById('germanWord');
  
  rendomIndexNum = Math.floor(Math.random() * vocabulary_db.length);
  let germanWord = vocabulary_db[rendomIndexNum].germenWord;

  refGermanWord.innerHTML = germanWord;
  renderHP()
}

function submitAnswer() {
  let refEnglishWord = document.getElementById('englishWord');
  let refShipShoot = document.getElementById('spaceShipShoot');
  let refInvaderShoot = document.getElementById('invaderShoot');
  let refMessage = document.getElementById('message');

  console.log(refEnglishWord.value);
  
  console.log(vocabulary_db[rendomIndexNum].englishWord);
  
  refMessage.innerHTML = '';
  if (refEnglishWord.value == vocabulary_db[rendomIndexNum].englishWord) {
    spaceShipShoot(refShipShoot, refMessage);
  } else {
    invaderShoot(refInvaderShoot, refMessage);
  }
}

function spaceShipShoot(shipShoot, refMessage) {
  shipShoot.classList.add('spaceship_shoot');
  shipShoot.style.animation = "shipShoot 0.5s ease-in";

  setTimeout(() => {
    shipShoot.classList.remove('spaceship_shoot');
    shipShoot.style.animation = "";
    refMessage.innerHTML = '!CORRECT!';
    invaderHP -= 100;
    if (invaderHP == 0) {
      lvlUP(refMessage);
    }
    renderQuestion();
  }, 600);
}

function invaderShoot(invaderShoot, refMessage) {
  invaderShoot.classList.add('invader_shoot');
  invaderShoot.style.animation = "invaderShoot 0.5s ease-in";

  setTimeout(() => {
    invaderShoot.classList.remove('invader_shoot');
    invaderShoot.style.animation = "";
    refMessage.innerHTML = 'NOOO!!!';
    spaceShipHP -= 100;
    if (spaceShipHP == 0) gameOverSeq(refMessage);
    renderQuestion();
  }, 600);
}

function renderHP() {
  let refSpaceShipHP = document.getElementById('spaceShipHP');
  let refInvaderHP = document.getElementById('invaderHP');
  let refSpaceShipLVL = document.getElementById('spaceShipLVL')

  refSpaceShipHP.innerHTML = spaceShipHP + 'HP';
  refInvaderHP.innerHTML = invaderHP + 'HP';
  refSpaceShipLVL.innerHTML = 'LVL ' + spaceShipLVL;
}

function lvlUP (refMessage) {
  refMessage.innerHTML = 'LVL++';
  spaceShipHP += spaceShipLVLup;
  spaceShipLVL++;
  invaderHP = 300;
}

function gameOverSeq(refMessage) {
  refMessage.innerHTML = 'GAME OVER';
  setTimeout(() => {
    location.reload();
  }, 2000);
}
