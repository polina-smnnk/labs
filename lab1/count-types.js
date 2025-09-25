const Arr = [
  4,
  "wxilsq",
  false,
  9,
  "lab1op",
  9999,
  true,
  "shoes",
  7,
  "labana10balov",
  "true",
  45623,
  "laptop",
  1,
  "dog",
];
const Types = { number: 0, string: 0, boolean: 0 };
function countTypes(arr) {
  for (const item of arr) {
    const type = typeof item;
    if (type in Types) {
      Types[type]++;
    }
  }
}
countTypes(Arr);
console.dir(Types);
//  оскільки в масиві є 5 чисел, 7 рядків і 3 булевих значення, то функція виведе { number: 5, string: 7, boolean: 3 }. Оскільки булеве значення 'true' є рядком, воно не враховується в підрахунку булевих значень.
