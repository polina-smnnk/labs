const fn = () => {
  const object1 = { name: "rostik" };
  let object2 = { name: "Alex" };

  object1.name = "Nika";
  object2.name = "Sophia";

  object2.name = { name: "petrovich" };
  console.dir({ object1, object2 });
};
fn();
//функція змінює властивість name в об'єкті object1 і object2, але не змінює посилання на об'єкт object1, а змінює посилання на об'єкт object2

function createUser(name, city) {
  return { name, city };
}

console.log(createUser("Polina", "Kyiv"));
//функція створює і повертає об'єкт з властивостями name і city
