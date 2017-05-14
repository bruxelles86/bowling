// This will iterate through the frames, and where any are 'finished', marked as either strike
// or spare, but with a final score of 0:
// if 'spare', check whether array's [frame.startingBallNumber + 2] index exists. If so, set
// final score equal to this plus the two ball scores (i.e. 10)
// if 'strike', check whether frame.startingBallNumber + 1 *and* +2 both exist. Adjust score as above.

scoreUpdater = function(ballPinsArray) {

  this.frames.forEach(function(frame) {
    if(frame.isSpare && ballPinsArray[frame.startingBallIndex + 2] != undefined) {
      frame.finalFrameScore = 10 + ballPinsArray[frame.startingBallIndex + 2]
    }
  });
};
