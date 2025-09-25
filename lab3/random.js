//Фукція, яка генерує випадкове ціле число в діапазоні від 0 до 100

function randomInt(min, max) {
  return Math.floor(Math.random() * max);
}
console.log(randomInt(0, 100));