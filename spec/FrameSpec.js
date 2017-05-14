describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame(1, Roll, 0);
    Fakeroll1 = function(parameter) { return 10; };
    Fakeroll2 = function(parameter) { return 5; };
    Fakeroll3 = function(Paramter) { return 3; }
   });

  it("starts with 10 pins standing", function() {
    expect(frame.pinsStanding).toEqual(10)
  });

  it("records the total score for the frame in question", function() {
    expect(frame.finalFrameScore).toEqual(0);
  });

  it("receives a roll function that randomly knocks down remaining pins", function() {
    expect(frame.roll(6) >= 0 && Roll(6) <= 6).toBeTruthy();
  });

  it("records the score after a first throw", function() {
    frame.takeTurn()
    expect(frame.rollOne).toEqual(jasmine.any(Number));
  });

  it("Subtracts the pins knocked down in the first throw from the remaining pins", function() {
    frame = new Frame(1, Fakeroll2, 0);
    frame.takeTurn()
    expect(frame.pinsStanding).toEqual(5);
  });

  it("Records a strike if ten pins knocked down on the first throw", function() {
     frame = new Frame(1, Fakeroll1, 0);
     frame.takeTurn()
     expect(frame.isStrike).toBe(true)
  });

  it("Records a spare if ten pins are knocked down over two throws", function() {
    frame = new Frame(1, Fakeroll2, 0);
    frame.takeTurn(); frame.takeTurn();
    expect(frame.isSpare).toBe(true)
  });

  it("Records a final frame score after the second ball if total sore is under 10", function() {
    frame = new Frame(1, Fakeroll3, 0);
    frame.takeTurn(); frame.takeTurn();
    expect(frame.finalFrameScore).toEqual(6);
  });

  it("Records the roll number of the first roll in each game", function() {
    frame.takeTurn(0); frame.takeTurn(1); frame.takeTurn(2);
    expect(frame.startingBallIndex).toEqual(2)
  });
});
