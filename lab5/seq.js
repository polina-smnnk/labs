function seq(...args) {
  const functions = [...args];

  const a = (...newArgs) => {
    if (typeof newArgs[0] === "function") {
      functions.push(...newArgs);
      return a;
    } else {
      return functions.reduceRight((result, fn) => fn(result), newArgs[0]);
    }
  };
  return a;
}
console.log(seq((x) => x + 7)((x) => x * 2)(5));
console.log(seq((x) => x + 2)((x) => x * 7)(5));
console.log(seq((x) => x + 1)((x) => x * 2)((x) => x / 3)((x) => x - 4)(7));


// Функція, яка приймає будь-яку кількість функцій як аргументи і повертає нову функцію.
