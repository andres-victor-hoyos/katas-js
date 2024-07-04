describe("??????????????????", () => {
  let game = null;
  beforeEach(() => {
    game = new Game();
  });

  const rollMany = (n, pins) => {
    for (let i = 0; i < n; i++) game.roll(pins);
  };

  const rollSpare = () => {
    rollMany(2, game.MAX_PINS / 2);
  };

  const rollStrike = () => {
    rollMany(1, game.MAX_PINS);
  };

  test("gutterGame", () => {
    rollMany(20, 0);
    expect(game.score()).toBe(0);
  });

  test("allOnes", () => {
    rollMany(20, 1);
    expect(game.score()).toBe(20);
  });

  test("one-spare", () => {
    rollSpare();
    rollMany(1, 7);
    rollMany(17, 0);
    expect(game.score()).toBe(24);
  });

  test("one-strike", () => {
    rollMany(1, game.MAX_PINS);
    rollMany(1, 2);
    rollMany(1, 3);
    rollMany(16, 0);
    expect(game.score()).toBe(20);
  });

  test("perfect game", () => {
    rollMany(12, game.MAX_PINS);
    expect(game.score()).toBe(300);
  });
});

function Game() {
  let _rolls = [];

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
