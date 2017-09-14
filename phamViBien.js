function foo() {
  var x = 10;
  const y = 201;
  if (x) {
    let x = 20;
    console.log(x);
  }
  console.log(x);
  console.log(y);
}

foo();
