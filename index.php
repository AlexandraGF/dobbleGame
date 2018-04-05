<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Dobble Game</title>
    <link rel="stylesheet" type="text/css" href="docs/public/dobbleGame.css"></link>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://fonts.googleapis.com/css?family=IBM+Plex+Sans+Condensed" rel="stylesheet">
    <script type="text/javascript" src="docs/jasmine/interface.js"></script>
    <script type="text/javascript" src="docs/jasmine/src/dobbleGame.js"></script>
  </head>
  <body>
    <h1>Let's play the Dobble Game!</h1>

    <section>
      <h2>To start the Game, please click on the Deck Cards in the middle. The player that is quicker to match and say out loud the symbol from his card with the exact symbol from the Game Deck Cards, needs to click on his card picture to get the card! The player with the most cards' number at the end wins the game!</h2>
      <h1 id="good"> Good Luck!</h1>
      <table class="table1">
      <tr>
        <h1 id="player1">Player 1 cards |||<span id="deckcards"> Deck cards |||</span>  <span id="player2"> Player 2 cards</span>  </h1>
        <button> <img id="player1card" src="docs/public/photos/photoPlayer1.JPG" type="image" name="button1" width="200" height="200" value="player1card" style="border-radius:50px;">Cards: <span id="player1cardswon">0</span></button>
        <button> <img id="gamecard" src="docs/public/photos/dobblegame.jpg" type="image" name="button2" width="250" height="200" value="player1card" style="border-radius:50px;"></button>
        <button>Cards: <span id="player2cardswon">0</span><img id="player2card" src="docs/public/photos/photoPlayer2.JPG" type="image" name="button3" width="200" height="200" value="player2card" style="border-radius:50px;"></button>
      <h3>Total cards to be played left: <span id="totalcards">26</span></h3>
      <h4>Developed by <a href="https://github.com/AlexandraGF">Alexandra Fina</a></h4>
      </table>
  </body>
</html>
