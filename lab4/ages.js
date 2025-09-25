const person = {
  lenin: { born: 1870, died: 1924 },
  mao: { born: 1893, died: 1976 },
  gandhi: { born: 1869, died: 1948 },
  hirohito: { born: 1901, died: 1989 },
  churchill: { born: 1874, died: 1965 },
};

function age(person) {
  return person.died - person.born;
}
console.log("lenin:", age(person.lenin));
console.log("mao:", age(person.mao));
console.log("gandhi:", age(person.gandhi));
console.log("hirohito:", age(person.hirohito));
console.log("churchill:", age(person.churchill));
// Функція, яка приймає об'єкт з інформацією про людей (імена, роки народження та смерті) і повертає їхній вік.
