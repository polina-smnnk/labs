const array1 = ["Paris", "Kiev", "Lima", "Lviv", "Berlin", "Dublin"];
const array2 = ["Kiev", "London", "Lisabon", "Vienna", "Warsaw", "Lima"];
const result = difference(array1, array2);
function difference(arr1, arr2) {
  return arr1.filter((element) => !arr2.includes(element));
}
console.log(result);
// Функція, яка приймає два масиви і повертає новий масив, що містить елементи, які є в першому масиві, але відсутні в другому.
