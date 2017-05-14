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
  this.rollOne = this.roll(this.pinsStanding);
  this.pinsStanding = this.pinsStanding - this.rollOne

  if(rollOne = 10) {
    this.isStrike = true;
    this.isFinished = true;
  }

};
//   method takeTurn
//
//  rollone = roll(pinsstanding)
//   pinststanding = pinsttanding - rollone
//  if rollone === 10, isStrike = true, frameFinished = true
//
//
//  if rollone < 10
//
//  rolltwo = roll(pinsstanding)
//   pinststanding = pinsttanding - rolltwo
//      if rollOne + rollTwo < 10
//        finalframeScore = rollOne + rollTwo, frameFinished = true
//      else if rollOne + rollTwo === 10, isSpare = true, frameFInished = true
//      end
//  end
//
//
//
//
//
//
