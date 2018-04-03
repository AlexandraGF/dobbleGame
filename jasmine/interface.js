$(document).ready(function() {
  var game = new DobbleGame();

  $('#gamecard').one('click', function() {
    $('#gamecard').attr('src', 'https://temporarytattoos.com/pub/media/catalog/product/cache/image/700x560/e9c3970ab036de70892d86c6d221abfe/n/u/number-1-temporary-tattoo_5035.jpg');
    console.log(game.history);
  });
});
