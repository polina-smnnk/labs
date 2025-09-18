function hoistVar() {
  console.log(x);
  var x= 181;
  console.log(x);
}
hoistVar();
// Оскільки змінні, оголошені через var, піднімаються вгору (hoisted), перший console.log(x) виведе undefined, а другий console.log(x) виведе 181.