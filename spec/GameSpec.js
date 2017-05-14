describe("Game", function() {
  var game;

  beforeEach(function() {
    game = new Game();
  });

  it("It has an array to store the pins knocked down for every roll in the game", function() {
    expect(game.ballPins).toEqual(jasmine.any(Array));
  });

  it("holds frames in an array", function() {
    expect(game.frames[0]).toEqual(jasmine.any(Frame));
    expect(game.frames[9]).toEqual(jasmine.any(Frame));
  });

  it("records a running total for the score", function() {
    game.frames[0].finalFrameScore = 4
    game.frames[1].finalFrameScore = 8
    expect(game.runningTotal()).toEqual(12)
  });

  it("records the number of pins knocked down after each bowl", function() {
    game.bowl; game.bowl
    expect(game.ballPins[0] >= 0 && game.ballPins[0] <= 10).toBeTruthy();
    expect(game.ballPins[1] >= 0 && game.ballPins[1] <= 10).toBeTruthy();
  });
});
