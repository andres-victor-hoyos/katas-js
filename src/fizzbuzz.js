const rules = [
  { divisor: 3, output: "FIZZ" },
  { divisor: 5, output: "BUZZ" },
];
export function fizzbuzz(number) {
  let result = number;
  let output = '';
  for (let i = 0; i < rules.length; i++) {
    if (number % rules[i].divisor === 0) output += rules[i].output;
  }
  return output ? output : number;
}
