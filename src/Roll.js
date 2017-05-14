Roll = function(pinsStanding) {
  max = Math.floor(pinsStanding);
  return Math.floor(Math.random() * (max - 0)) + 0;
};
