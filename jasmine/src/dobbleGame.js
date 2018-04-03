var DobbleGame = function () {
  this.player1Card = '';
  this.player1CardNo = 0;
};

DobbleGame.prototype.findMatch = function (card, player) {
  this.player1Card = card;
  this.player1CardNo += 1;
};
