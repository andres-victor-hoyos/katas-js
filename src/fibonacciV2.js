const fibonacci = async (n) =>
  n === 0
    ? []
    : n === 1
    ? [1]
    : n === 2
    ? [1, 1]
    : await recursive_fibs(n, 3, [1, 1, 2]);

const recursive_fibs = (n, c, init) =>
  new Promise((resolve) => {
    const next = (n, c, init) =>
      n === 3
        ? resolve(init)
        : setImmediate(() =>
            next(n - 1, c + 1, [...init, init[c - 1] + init[c - 2]])
          );
    next(n, c, init);
  });

export default fibonacci;
