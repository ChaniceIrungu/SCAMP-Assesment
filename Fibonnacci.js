const fibo = (n) =>
  Array.from({ length: n }).reduce(
    (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
    []
  );
console.log(fibo(5));
console.log(fibo(4));
console.log(fibo(7));
