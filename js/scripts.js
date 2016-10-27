function Player() {
  this.currentScore;
  this.totalScore;
}

function PigDice(player1, player2) {
  this.currentPlayer = player1;
  this.roll;
  this.clickHold = false;
}

PigDice.prototype.newGame = function() {
  var roll = Math.floor(Math.random() * 6) + 1;
  if(roll === 1) {
    this.currentPlayer.currentScore = 0;
    this.switchPlayer();
  } else if(roll !== 1) {
    this.currentPlayer.currentScore += roll;
  }
  this.roll = roll;
}

PigDice.prototype.hold = function() {
  if(this.clickHold === false) {
    this.currentPlayer.totalScore += this.currentPlayer.currentScore;

    this.switchPlayer();
  }
}

PigDice.prototype.switchPlayer = function() {
  if(this.currentPlayer = player1) {
    this.currentPlayer = player2;
  } else {
    this.currentPlayer = player1;
  }
}

$(document).ready(function() {
  $("#play-game-btn").click(function(event) {
    event.preventDefault();
    //  $("#game").empty('');

    $("#play-game-btn").hide();
    $("#game").show();

    var player1 = new Player();
    var player2 = new Player();
    var pigGame = new PigDice(player1, player2);

    if(pigGame.currentPlayer === player1) {
      // $("#player1").show();
      // $("#player2").hide();

      $("#p1roll").click(function() {
        pigGame.newGame();
        //console.log(pigGame.roll);
        console.log(pigGame.currentPlayer.currentScore);

        $("#p1rolled").text(pigGame.roll);
        $("#p1cts").text(pigGame.currentPlayer.currentScore);
        $("#p1ts").text(Player.totalScore);
      });
      // $("#p1hold").click(function() {
      //   var holdButton = true;
      // });
    } else if (pigGame.currentPlayer === player2) {
      // $("#player2").show();
      // $("#player1").hide();
      //
      // $("#p2roll").click(function() {
      //   $("#p2rolled").text(game.playGame());
      //   $("#p2cts").text(game.curentScore);
      // });
    }
  });
});
