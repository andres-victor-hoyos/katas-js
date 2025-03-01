import decimalToBinary from "../src/decimla-to-binary"; 

describe("Get binary representation", () => {
  test("Convert number to string binary", () => {
    const cases = [
      { input: 1, output: '1' },
      { input: 0, output: '0' },
      { input: 13, output: '1101' },
      { input: 14, output: '1110' },
      { input: 41, output: '101001' },
    ];
    for (let i = 0; i < cases.length; i++)
      expect(decimalToBinary(cases[i].input)).toStrictEqual(cases[i].output);
  });
});

