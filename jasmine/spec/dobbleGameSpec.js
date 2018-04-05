describe('DobbleGame', function (){

  describe('Player can ', function(){
    it('win a card if he is quicker to find the matching object', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 1;
      game.findMatch(card, player);
      expect(game.player1Card).toEqual('picture1');
    });

    it('see the winning cards counter', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 1;
      game.findMatch(card, player);
      expect(game.player1CardNo).toEqual(1);
    });

    it('see the other player\'s winning cards counter', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 2;
      game.findMatch(card, player);
      expect(game.player2CardNo).toEqual(1);
    });

    it('see the other player\'s getting the card he lost', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 2;
      game.findMatch(card, player);
      expect(game.player2Card).toEqual('picture1');
    });

    it('not have won more cards than total cards number', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 1;
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      expect(game.player1CardNo).toEqual(26);
    });
  });

  describe('The cards: ', function(){
    it('Total number of deck is smaller when a symbol is matched', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 1;
      game.findMatch(card, player);
      expect(game.totalCardsNo).toEqual(25);
    });

    it('Each card played and won will be taben out from cards array', function() {
      game = new DobbleGame();
      card = 'picture3';
      player = 1;
      game.findMatch(card, player);
      expect(game.cards.length).toEqual(25);
    });

    it('Current game card should be a random card', function() {
      game = new DobbleGame();
      game.randomCard();
      expect(game.currentCard.length).toEqual(25);
    });
  });

  describe('Game ', function(){
    it('can be reset when finished to be played again', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 1;
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.findMatch(card, player);
      game.resetGame();
      expect(game.cards.length).toEqual(26);
    });
  });

});
