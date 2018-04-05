var DobbleGame = function () {
  this.player1Card = '';
  this.player2Card = '';
  this.player1CardNo = 0;
  this.player2CardNo = 0;
  this.totalCardsNo = 26;
  this.cards = ["public/photos/photo01.JPG", "public/photos/photo02.JPG", "public/photos/photo03.JPG", "public/photos/photo04.JPG", "public/photos/photo05.JPG", "public/photos/photo06.JPG", "public/photos/photo07.JPG", "public/photos/photo08.JPG", "public/photos/photo09.JPG", "public/photos/photo10.JPG", "public/photos/photo11.JPG", "public/photos/photo12.JPG", "public/photos/photo13.JPG", "public/photos/photo14.JPG", "public/photos/photo15.JPG", "public/photos/photo16.JPG", "public/photos/photo17.JPG", "public/photos/photo18.JPG", "public/photos/photo19.JPG", "public/photos/photo20.JPG", "public/photos/photo21.JPG", "public/photos/photo22.JPG", "public/photos/photo23.JPG", "public/photos/photo24.JPG", "public/photos/photo25.JPG", "public/photos/photo26.JPG"];
  this.currentCard = '';
};

DobbleGame.prototype.findMatch = function (card, player) {

  if (this.totalCardsNo > 0) {

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
  }
};

DobbleGame.prototype.randomCard = function () {
  console.log(this.cards);
  this.currentCard = this.cards[Math.floor((Math.random()* this.cards.length))];
};

DobbleGame.prototype.resetGame = function () {
  this.player1Card = '';
  this.player2Card = '';
  this.player1CardNo = 0;
  this.player2CardNo = 0;
  this.totalCardsNo = 26;
  this.cards = ["public/photos/photo01.JPG", "public/photos/photo02.JPG", "public/photos/photo03.JPG", "public/photos/photo04.JPG", "public/photos/photo05.JPG", "public/photos/photo06.JPG", "public/photos/photo07.JPG", "public/photos/photo08.JPG", "public/photos/photo09.JPG", "public/photos/photo10.JPG", "public/photos/photo11.JPG", "public/photos/photo12.JPG", "public/photos/photo13.JPG", "public/photos/photo14.JPG", "public/photos/photo15.JPG", "public/photos/photo16.JPG", "public/photos/photo17.JPG", "public/photos/photo18.JPG", "public/photos/photo19.JPG", "public/photos/photo20.JPG", "public/photos/photo21.JPG", "public/photos/photo22.JPG", "public/photos/photo23.JPG", "public/photos/photo24.JPG", "public/photos/photo25.JPG", "public/photos/photo26.JPG"];
  this.currentCard = '';
};
