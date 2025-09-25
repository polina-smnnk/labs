function average(a, b) {
  return (a + b) / 2;
}
console.log(average(50, 150));
//функція виводить середнє арифметичне двох чисел a і b, тобто (50 + 150) / 2

function square(a) {
  return a * a;
}
console.log(square(9));
//функція виводить квадрат числа a, тобто 9 * 9

function cube(b) {
  return b * b * b;
}
console.log(cube(2));
//функція виводить куб числа b, тобто 2 * 2 * 2

function calculate(start, end) {
  let array = [];
  for (let n = start; n <= end; n++) {
    function square(n) {
      return n * n;
    }
    function cube(n) {
      return n * n * n;
      function average(square, cube) {
        return (square + cube) / 2;
      }
    }
    array.push(average(square(n), cube(n)));
  }
  return array;
}
console.log(calculate(0, 9));
//функція виводить середнє арифметичне квадрата і куба числа n в діапазоні від start до end, тобто від 0 до 9
