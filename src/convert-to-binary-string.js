
export default decimalToBinary = (number, result = '') => {
    const base = 2;
    return number < base ? number + result
      : decimalToBinary(Math.trunc(number / base), (number % base) + result);
  }