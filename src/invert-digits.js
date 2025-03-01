const invertDigits = (number, result = 0) =>
    number === 0 ? result
      : invertDigits(Math.trunc(number / 10), result * 10 + (number % 10));
export default invertDigits;