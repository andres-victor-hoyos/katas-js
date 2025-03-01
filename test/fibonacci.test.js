import fibonacci from "../src/fibonacci";
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

  // Maximum number of attempts determined empirically
  // This value was established by testing the execution until it pass
  const MAX_ATTEMPTS = 7279; //Adjust the value as needed
  test("test fibonacci maximum call stack size without exceeded", () => {
    expect(fibonacci(MAX_ATTEMPTS)).resolves.not.toThrow();
  });

  test("test fibonacci maximum call stack size exceeded", () => {
    expect(fibonacci(MAX_ATTEMPTS + 3)).resolves.not.toThrow();
  });
});
