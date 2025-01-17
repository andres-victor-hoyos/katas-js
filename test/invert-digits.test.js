import '../src/invert-digits'
describe("Invert Digits", () => {
  test("should invert the order of digits in an integer", () => {
    const cases = [
      { input: 1, output: 1 },
      { input: 12, output: 21 },
      { input: 321, output: 123 },
      { input: 12345, output: 54321 },
    ];
    for (let i=0; i < cases.length; i++) {
      expect(invertDigits(cases[i].input)).toBe(cases[i].output);
    }
  });
});


