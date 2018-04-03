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

  });
});
