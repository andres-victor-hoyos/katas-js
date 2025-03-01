import fizzbuzz  from "../src/fizzbuzz";

test("fizzbuzz", () => {
  expect(fizzbuzz(1)).toBe(1);
  expect(fizzbuzz(2)).toBe(2);
  expect(fizzbuzz(3)).toBe("FIZZ");
  expect(fizzbuzz(4)).toBe(4);
  expect(fizzbuzz(5)).toBe("BUZZ");
  expect(fizzbuzz(3 * 5)).toBe("FIZZBUZZ");
  expect(fizzbuzz(3 * 5 * 15)).toBe("FIZZBUZZ");
  expect(fizzbuzz(3 ** 5)).toBe("FIZZ");
  expect(fizzbuzz(5 ** 6)).toBe("BUZZ");
});
