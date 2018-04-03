$(document).ready(function() {
  var game = new DobbleGame();

  $('#gamecard').on('click', function() {
    if (game.totalCardsNo == 5) {
    game.randomCard();
    $('#gamecard').attr('src', game.currentCard);
    }
    if (game.totalCardsNo < 1) {
      $('#gamecard').attr('src', 'public/dobblegame.jpg');
      game.resetGame();
      console.log(game.totalCardsNo);
    }
  });

  $('#player1card').on('click', function() {
    game.findMatch(game.currentCard, 1);
    $('#player1card').attr('src', game.currentCard);
    console.log(game.currentCard);
    game.randomCard();
    $('#gamecard').attr('src', game.currentCard);
    if (game.totalCardsNo == 0) {
      $('#gamecard').attr('src', 'public/playagain.jpg');
    }
    $('#player1cardswon').text(game.player1CardNo);
    $('#totalcards').text(game.totalCardsNo);
    console.log(game.currentCard);
    console.log(game.totalCardsNo);
  });

  $('#player2card').on('click', function() {
    game.findMatch(game.currentCard, 2);
    $('#player2card').attr('src', game.currentCard);
    console.log(game.currentCard);
    game.randomCard();
    $('#gamecard').attr('src', game.currentCard);
    if (game.totalCardsNo == 0) {
      $('#gamecard').attr('src', 'public/playagain.jpg');
    }
    $('#player2cardswon').text(game.player2CardNo);
    $('#totalcards').text(game.totalCardsNo);
    console.log(game.currentCard);
    console.log(game.totalCardsNo);
  });


});
