function generateKey(length, character) {
  let key = "";
  for (let i = 0; i < length; i++) {
    key += character.charAt(Math.floor(Math.random() * character.length));
  }
  return key;
}
console.log(generateKey(16, "abcdefghijklmnopqrstuvwxyz0123456789"));
// Функція яка генерує випадковий ключ довжиною 16 символів, використовуючи малі літери англійського алфавіту та цифри від 0 до 9.