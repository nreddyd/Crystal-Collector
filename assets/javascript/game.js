$(document).ready(function() {
  var wins = 0;
  var losses = 0;
  var score, crystal1, crystal2, crystal3, crystal4, randomnumber;
  var audioElement = document.createElement("audio");

  function getRandomArbitrary(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function reset() {
    console.log("inside reset");
    randomnumber = getRandomArbitrary(19, 120);
    score = 0;
    $("#score").text(score);

    // $("#result").text("");
    $("#randomnumber").text(randomnumber);

    crystal1 = getRandomArbitrary(1, 12);
    // $(".crystal1").text(crystal1);

    crystal2 = getRandomArbitrary(1, 12);
    // $(".crystal2").text(crystal2);

    crystal3 = getRandomArbitrary(1, 12);
    // $(".crystal3").text(crystal3);

    crystal4 = getRandomArbitrary(1, 12);
    // $(".crystal4").text(crystal4);
  }

  function checkscore() {
    if (score >= randomnumber) {
      if (score == randomnumber) {
        audioElement.setAttribute("src", "assets/music/win.mp3");
        audioElement.play();
        wins++;
        $("#wins").text(wins);
        $("#result").text("You Won!!");

        audioElement.play();
        reset();
      } else {
        audioElement.setAttribute("src", "assets/music/loose.mp3");
        audioElement.play();
        losses++;

        $("#losses").text(losses);
        $("#result").text("You Lost!!");

        reset();
      }
    }
  }
  reset();
  $("#crystal1").on("click", function() {
    audioElement.setAttribute("src", "assets/music/Crystal1.mp3");
    audioElement.play();
    score += crystal1;
    $("#score").text(score);
    checkscore();
  });

  $("#crystal2").on("click", function() {
    audioElement.setAttribute("src", "assets/music/Crystal2.mp3");
    audioElement.play();
    score += crystal2;

    $("#score").text(score);
    checkscore();
  });

  $("#crystal3").on("click", function() {
    audioElement.setAttribute("src", "assets/music/Crystal3.mp3");
    audioElement.play();
    score += crystal3;

    $("#score").text(score);
    checkscore();
  });

  $("#crystal4").on("click", function() {
    audioElement.setAttribute("src", "assets/music/Crystal4.mp3");
    audioElement.play();
    score += crystal4;

    $("#score").text(score);
    checkscore();
  });

  $("#reset").on("click", function() {
    wins = 0;
    $("#wins").text(wins);

    losses = 0;
    $("#losses").text(losses);
    $("#result").text("");

    reset();
  });
});
