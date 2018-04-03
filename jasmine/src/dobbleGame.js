var DobbleGame = function () {
  this.player1Card = '';
  this.player1CardNo = 0;
  this.player2CardNo = 0;
};

DobbleGame.prototype.findMatch = function (card, player) {

  if (player == 1) {
  this.player1Card = card;
  this.player1CardNo += 1;
  }
  else {
    this.player2CardNo += 1;
  }
};
