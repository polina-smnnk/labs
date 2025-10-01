const read = store(5);
const value = read();
function store(value) {
  return function () {
    return value;
  };
}
console.log(value);

//функція, яка приймає будь-яке значення і повертає функцію, яка при виклику повертає це значення.
