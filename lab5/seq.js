const seq = (f) => (g) => {
  if (g === "Number") {
    return (x) => f(g(x));
  } else {
    return (x) => g(f(x));
  }
};
console.log(seq((x) => x + 5)((x) => x * 3)(8));
console.log(seq((x) => x + 9)((x) => x * 3)(18));
// Функція, яка приймає дві функції і повертає нову функцію, яка є композицією цих двох функцій.