function Game() {
    const _rolls = [];
  
    const isSpare = (frameIndex) =>
      _rolls[frameIndex] + _rolls[frameIndex + 1] === this.MAX_PINS;
  
    const isStrike = (frameIndex) => _rolls[frameIndex] === this.MAX_PINS;
  
    const strikeBonus = (frameIndex) =>
      _rolls[frameIndex + 1] + _rolls[frameIndex + 2];
  
    const spareBonus = (frameIndex) => _rolls[frameIndex + 2];
  
    const twoBallsInFrame = (frameIndex) =>
      _rolls[frameIndex] + _rolls[frameIndex + 1];
  
    this.MAX_PINS = 10;
    this.MAX_FRAMES = 10;
  
    this.score = () => {
      let score = 0;
      let frameIndex = 0;
      for (let frame = 0; frame < this.MAX_FRAMES; frame++) {
        if (isStrike(frameIndex)) {
          score += this.MAX_PINS + strikeBonus(frameIndex);
          frameIndex++;
        } else if (isSpare(frameIndex)) {
          score += this.MAX_PINS + spareBonus(frameIndex);
          frameIndex += 2;
        } else {
          score += twoBallsInFrame(frameIndex);
          frameIndex += 2;
        }
      }
      return score;
    };
  
    this.roll = (pins) => _rolls.push(pins);
  }
  
  export default Game;