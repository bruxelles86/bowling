Game = function() {
  this.roller = Roll
  this.ballPins = []
  this.currentFrame = 1
  this.frames = [new Frame(1, this.roller), new Frame(2, this.roller),
    new Frame(3, this.roller), new Frame(4, this.roller),
    new Frame(5, this.roller), new Frame(6, this.roller),
    new Frame(7, this.roller), new Frame(8, this.roller),
    new Frame(9, this.roller), new Frame(10, this.roller)]

  };

  Game.prototype.runningTotal = function() {
    return this.frames.reduce(function(accumulator, item) {
      return accumulator + item.finalFrameScore }, 0);
    };

  Game.prototype.bowl = function() {
    this.frames[this.currentFrame - 1].takeTurn()

    if(this.frames[this.currentFrame - 1].rollTwo === null) { this.ballPins.push(this.frames[this.currentFrame - 1].rollOne)
    } else { this.ballPins.push(this.frames[this.currentFrame - 1].rollTwo)}

    if(this.frames[this.currentFrame - 1].isFinished) { this.currentFrame++ }
  };
    
  Game.prototype.updateScores = function() {
    // This will iterate through the frames, and where any are 'finished', marked as either strike
    // or spare, but with a final score of 0:
    // if 'spare', check whether array's [frame.startingBallNumber + 2] index exists. If so, set
    // final score equal to this plus the two ball scores (i.e. 10)
    // if 'strike', check whether frame.startingBallNumber + 1 *and* +2 both exist. Adjust score as above.
  };
