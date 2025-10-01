// Функція pipe, приймає довільну кількість функцій і повертає нову функцію, що застосовує їх у прямому порядку до аргументу. Якщо одна з функцій не є функцією, програма викликати помилку.
const pipe = (...fns) => {
  for (const fn of fns) {
    if (typeof fn !== "function")
      throw new Error("Some argument is not function!");
  }
  return (x) => fns.reduce((acc, fn) => fn(acc), x);
};
const inc = (x) => ++x;
const twice = (x) => x * 2;
const cube = (x) => x ** 3;

const fn1 = pipe(inc, twice, cube);
const fn2 = pipe(inc, inc);
//const fn3 = pipe(inc, 7, cube) Константа в якій один з аргументів не є функцією.

console.log(fn1(5));
console.log(fn2(7));
//console.log(fn3(18)) Виводить помилку, адже один з аргументів не є функцією.



