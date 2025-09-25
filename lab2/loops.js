function all(start, end) {
  let array = [];
  for (let x = start; x <= end; x++) {
    array.push(x);
  }
  return array;
}
console.log(all(15, 30));
//функція виводить всі знаечення в діапазоні від start до end, тобто від 15 до 30

function Odd(start, end) {
  let array = [];
  for (let x = start; x <= end; x++) {
    if (x % 2) {
      array.push(x);
    }
  }
  return array;
}
console.log(Odd(15, 30));
//функція виводить всі непарні значення в діапазоні від start до end, тобто від 15 до 30
