function inc(k) {
  return k + 18;
}
const x = 13;
const y = inc(x);
console.dir({ x, y });
// x залишилось 13, y стало 31, оскільки функція збільшує значення на 18, але не змінює оригінальне значення x.

function incNumber(num) {
  num.f += 20;
  console.dir(num);
}
num = {
  f: 44,
  y: 1800,
};
incNumber(num);
// num.f стало 64, оскільки об'єкти передаються за посиланням, і зміни всередині функції впливають на оригінальний об'єкт.
