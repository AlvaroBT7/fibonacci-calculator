// calculadora de sequencia funcional (0.07 - 0.06);
const calculateFibSequenceF = (n = -1) => {
  console.time();
  if (n === 0) return [];
  if (n < 0)
    throw new Error("Invalid `n` argument, negative values are not accepted !");
  if (n > 1000) throw new Error("Invalid `n` argument, `n` is to big !");
  const sequence = [0, 1, 1];
  if (n < sequence.length + 1) {
    return sequence.slice(0, n);
  }
  const getLastTwoElementsFromArr = (arr) => {
    const [f, s] = arr.toReversed();
    return [f, s];
  };
  Array(n - sequence.length)
    .fill(null)
    .forEach(() => {
      const [first, last] = getLastTwoElementsFromArr(sequence);
      sequence.push(first + last);
    });
  return sequence;
};

// calculadora de sequencia recursiva (0.06, 0.05);
const calculateFibSequenceR = (length) => {
  const fib = (number) => {
    if (number < 2) return number;
    return fib(number - 2) + fib(number - 1);
  };
  return new Array(length).fill(null).map((_, index) => fib(index));
};

("funcional");
calculateFibSequenceF(25);
("\n");
("recursiva");
calculateFibSequenceR(25);
