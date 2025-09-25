const fn = (ip = "181.138.09.55") => {
  const num = ip.split(".");
  let solution = 0;
  for (let i = 0; i < num.length; i++) {
    solution = solution << 8;
    solution += Number(num[i]);
  }
  return solution;
};
console.log(fn())
// Функція, яка конвертує IP адресу з формату рядка у формат цілого числа.