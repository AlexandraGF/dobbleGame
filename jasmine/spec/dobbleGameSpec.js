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
  });

  describe('The cards: ', function(){
    it('Total number of deck is smaller when a symbol is matched', function() {
      game = new DobbleGame();
      card = 'picture1';
      player = 1;
      game.findMatch(card, player);
      expect(game.totalCardsNo).toEqual(4);
    });

    it('Each card played and won will be taben out from cards array', function() {
      game = new DobbleGame();
      card = 'picture3';
      player = 1;
      game.findMatch(card, player);
      expect(game.cards.length).toEqual(4);
    });

    it('Current game card should be a random card', function() {
      game = new DobbleGame();
      game.randomCard();
      expect(game.currentCard.length).toEqual(17);
    });

  });

});
