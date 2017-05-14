describe("Frame", function() {
  var frame

  beforeEach(function() {
    frame = new Frame(1, Roll, 0);
    Fakeroll = function(parameter) { return 10; };
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
    frame.takeTurn()
    expect(frame.pinsStanding).toEqual(10 - frame.rollOne);
  });

  it("Records a strike if ten pins knocked down on the first throw", function() {
     frame = new Frame(1, Fakeroll, 0);
     frame.takeTurn()
     expect(frame.isStrike).toBe(true)
  });
});
