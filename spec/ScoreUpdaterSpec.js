// This will iterate through the frames, and where any are 'finished', marked as either strike
// or spare, but with a final score of 0:
// if 'spare', check whether array's [frame.startingBallNumber + 2] index exists. If so, set
// final score equal to this plus the two ball scores (i.e. 10)
// if 'strike', check whether frame.startingBallNumber + 1 *and* +2 both exist. Adjust score as above.
describe("ScoreUpdater", function() {

  beforeEach(function() {
    game = new Game();
  });

  it("gives frame 1 a score of 15 if a spare, and 5 scored on the first ball in frame 2", function() {
    game.frames[0].startingBallIndex = 0; game.frames[0].isSpare = true; game.ballPins = [5, 5, 5];
    game.updateScores(game.ballPins);
    expect(game.frames[0].finalFrameScore).toEqual(15)
  });

  it("gives frame 4 a score of 20 if a spare, and the next ball is a strike", function() {
    game.frames[5].startingBallIndex = 6; game.frames[5].isSpare = true;
    game.ballPins = [1, 2, 3, 4, 5, 5, 6, 4, 10]
    game.updateScores(game.ballPins);
    expect(game.frames[5].finalFrameScore).toEqual(20)
  });

  it("gives frame 1 a score of 17 if a strike, and total of 7 scored over next two balls", function() {
    game.frames[0].startingBallIndex = 0; game.frames[0].isStrike = true; game.ballPins = [10, 5, 2];
    game.updateScores(game.ballPins);
    expect(game.frames[0].finalFrameScore).toEqual(17)
  });

  it("gives frame 3 a score of 22 if a strike, and the next two balls are a strike and a two", function() {
    game.frames[2].startingBallIndex = 4; game.frames[2].isStrike = true;
    game.ballPins = [4, 3, 6, 8, 10, 10, 2];
    game.updateScores(game.ballPins);
    expect(game.frames[2].finalFrameScore).toEqual(22)
  });

  it("gives frame 1 a score of 30 if a strike, and the next two balls are both strikes", function() {
    game.frames[0].startingBallIndex = 0; game.frames[0].isStrike = true;
    game.ballPins = [10, 10, 10];
    game.updateScores(game.ballPins);
    expect(game.frames[0].finalFrameScore).toEqual(30)
  });
});
