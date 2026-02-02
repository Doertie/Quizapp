let rendomNum = 0;

function renderQuestion() {
  let refQuestion = document.getElementById('question');
  rendomNum = Math.floor(Math.random() * vocabulary_db.length);

  let question = vocabulary_db[rendomNum].question;
  refQuestion.innerHTML = question;
}

function submitAnswer() {
  let answer = document.getElementById('answer');
  
  if (answer.value == vocabulary_db[rendomNum].answer) {
    console.log('that was right');
  } else {
    console.log('that was not correct');
  }
}
