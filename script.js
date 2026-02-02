let rendomNum = 0;

function renderQuestion() {
  let refQuestion = document.getElementById('question');
  rendomNum = Math.floor(Math.random() * vocabulary_db.length);

  let question = vocabulary_db[rendomNum].question;
  refQuestion.innerHTML = question;
}

function submitAnswer() {
  let answer = document.getElementById('answer');
  let shipShot = document.getElementById('spaceShipShot')

  if (answer.value == vocabulary_db[rendomNum].answer) {
    shipShot.classList.add('spaceship_shot');
    shipShot.style.animation = "shipShot 2s"

    setTimeout(() => {
      shipShot.classList.remove('spaceship_shot');
      shipShot.style.animation = ""
      renderQuestion()
    }, 2000);
    console.log('that was right');

  } else {
    console.log('that was not correct');
  }
}
