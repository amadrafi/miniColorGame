var squares = document.getElementsByClassName('square');
var score = 0;
var scoreDisplay = document.getElementById('score');
var color = 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')'

// Choose any random number between 0 - 255
function randomNumber(){
  var max = 255;
  var min = 0;
  return Math.floor(Math.random() * (max - min) ) + min;
}

// Choose any random box
function randomSquare(){
  var max = 5;
  var min = 0;
  return Math.floor(Math.random() * 5);
}

// To reset
function reset(){
  for(var i = 0; i < 6; i++){
    squares[i].style.backgroundColor = 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')';
  }
  color = 'rgb(' + randomNumber() + ', ' + randomNumber() + ', ' + randomNumber() + ')'
  document.getElementById('rgb').textContent = color;
  scoreDisplay.textContent = score;
  squares[randomSquare()].style.backgroundColor = color;
}

// timer
function timer(){
    var sec = 60;
    var timer = setInterval(function(){
        document.getElementById('safeTimerDisplay').innerHTML='00:'+sec;
        sec--;
        if (sec < 0) {
            clearInterval(timer);
        }
    }, 1000);
}

// Actual Application
// To put any random color to the box
reset()
document.getElementById('safeTimerDisplay').addEventListener('click', function(){
  timer();
})
for(var i = 0; i < squares.length; i++){
  squares[i].addEventListener('click', function(){
    if(this.style.backgroundColor == color){
      score++;
      reset();
    }
    else if (this.style.backgroundColor != color){
      this.style.backgroundColor = 'darkslategrey';
    }
    scoreDisplay.textContent = score;
  })
}
