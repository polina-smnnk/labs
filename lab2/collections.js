const phonenumbers = [{name: "Alex", phone : +380681111111},
                {name: "Kolya", phone : +380682222222},
                {name: "Hashim", phone : +380683333333},
                {name: "Kira", phone : +380684444444},
                {name: "Masha", phone : +380685555555},];
let findPhoneByName = (name) => {
    for (const object of phonenumbers) {
        if (object.name === name) {
            return object.phone;
        }
    }
    return 'Контакт не знайдено';
}

console.log(findPhoneByName("Alex"));
console.log(findPhoneByName("Kolya"));
console.log(findPhoneByName("Hashim"));
console.log(findPhoneByName("Kira"));
console.log(findPhoneByName("Masha"));
console.log(findPhoneByName("Nikita"));
//функція виводить номер телефону за іменем з масиву об'єктів phonenumbers, якщо ім'я не знайдено, повертає 'Контакт не знайдено'





const hash = {Alex: "380681111111",
    Kolya: "380682222222",
    Hashim: "380683333333",
    Kira: "380684444444",
    Masha: "380685555555",
}
const bookhash = (name) => hash[name];

console.log(bookhash("Alex"));
console.log(bookhash("Kolya"));
console.log(bookhash("Hashim"));
console.log(bookhash("Kira"));
console.log(bookhash("Masha"));
//функція виводить номер телефону за іменем з об'єкта hash, якщо ім'я не знайдено, повертає undefined



