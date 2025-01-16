import Game from "../src/bowling-game";'../src/bowling-game';

describe("Bowling game score", () => {
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

