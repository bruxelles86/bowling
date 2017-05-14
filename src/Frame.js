Frame = function(frameNumber, Roll, ballnumber) {
  this.startingBallNumber = ballnumber
  this.frameNumber = frameNumber
  this.roll = Roll
  this.pinsStanding = 10
  this.rollOne = null; this.rollTwo = null;
  this.isStrike = false; this.isSpare = false
  this.isFinished = false
  this.finalFrameScore = 0
};

Frame.prototype.takeTurn = function() {

  if(this.rollOne === null) {
    this.rollOne = this.roll(this.pinsStanding);
    this.pinsStanding = this.pinsStanding - this.rollOne

    if(this.rollOne === 10) {
      this.isStrike = true; this.isFinished = true;
    }
    return this.rollOne
  } else if(this.rollOne < 10 && this.rollTwo === null) {
    this.rollTwo = this.roll(this.pinsStanding);
    this.pinsStanding = this.pinsStanding - this.rollTwo
    this.isFinished = true;

    if(this.rollOne + this.rollTwo === 10) {
      this.isSpare = true;
    } else if(this.rollOne + this.rollTwo < 10) {
      this.finalFrameScore = this.rollOne + this.rollTwo
    }
    return this.rollTWo
  };
};
