$(document).ready(function() {
  var game = new DobbleGame();

  $('#gamecard').one('click', function() {
    game.randomCard();
    $('#gamecard').attr('src', game.currentCard);
    console.log(game.currentCard);
    // console.log(game.num);
  });
});
