Game = function() {
  this.roller = roll
  this.updateScores = scoreUpdater
  this.bowl = bowl
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
