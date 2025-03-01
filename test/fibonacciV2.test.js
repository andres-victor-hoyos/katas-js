import fibonacci from '../src/fibonacciV2';
describe("Fibonacci", () => {
  test.each([
    [0, []],
    [1, [1]],
    [2, [1, 1]],
    [3, [1, 1, 2]],
    [4, [1, 1, 2, 3]],
    [5, [1, 1, 2, 3, 5]],
  ])(
    "generates correct Fibonacci sequences up to a given number",
    async (n, expected) => {
      const result = await fibonacci(n);
      expect(result).toEqual(expected);
    }
  );

  test("", () => {
    expect(fibonacci(7680)).resolves.not.toThrow();
  });
});

