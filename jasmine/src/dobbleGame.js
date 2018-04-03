var DobbleGame = function () {
  this.player1Card = '';
  this.player2Card = '';
  this.player1CardNo = 0;
  this.player2CardNo = 0;
  this.totalCardsNo = 5;
  this.cards = ['public/photo1.JPG', 'public/photo2.JPG', 'public/photo3.JPG', 'public/photo4.JPG', 'public/photo5.JPG'];
  this.currentCard = '';
};

DobbleGame.prototype.findMatch = function (card, player) {

  if (player == 1) {
  this.player1Card = card;
  this.player1CardNo += 1;
  }
  else {
    this.player2Card = card;
    this.player2CardNo += 1;
  };

  this.totalCardsNo -= 1;
  this.cards.splice( this.cards.indexOf(card), 1 );
};

DobbleGame.prototype.randomCard = function () {
  this.currentCard = this.cards[Math.floor((Math.random()* this.cards.length))];
};

DobbleGame.prototype.resetGame = function () {
  this.player1Card = '';
  this.player2Card = '';
  this.player1CardNo = 0;
  this.player2CardNo = 0;
  this.totalCardsNo = 5;
  this.cards = ['public/photo1.JPG', 'public/photo2.JPG', 'public/photo3.JPG', 'public/photo4.JPG', 'public/photo5.JPG'];
  this.currentCard = '';
};
