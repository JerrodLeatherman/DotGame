$(document).ready(function(){
  
  var username;
  $('#begin').click(function(){
    username = document.getElementById("username").value;
  });


  //Initial score
  var score = 0;
  document.getElementById("score").innerHTML = score;

  //Moves the dot randomly within the screen on click
  $("#dot").click(function(){
    score +=10;
    document.getElementById("score").innerHTML = score;
    let top = Math.floor(Math.random() * 80) + 10;
    let left = Math.floor(Math.random() * 80) + 10;
    $("#dot").animate({
      top: left + '%',
      left: top + '%',
    },250);
  });



  //test interval function

  var timer = setInterval(function(){timerFunction()},1000);

  var timerLength = 5;
  document.getElementById("timer").innerHTML = timerLength;

  function timerFunction() {
    document.getElementById("timer").innerHTML = timerLength;
    timerLength -= 1;
    if (timerLength < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "You scored: " + score;
    }
  }


});
