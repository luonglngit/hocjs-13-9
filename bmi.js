function tinhBMI(canNang, chieuCao) {
  console.log(typeof canNang);
  console.log(typeof chieuCao);
  let ketQua = canNang / (chieuCao * chieuCao);

  console.log(canNang - chieuCao);
  console.log(canNang + chieuCao);
  return ketQua;
}

console.log(tinhBMI("90", 1.8));

var myArr = [
  "1",
  0,
  {},
  function test(params) {
    return "Hi";
  }
];

//index, Array[index]

console.log(myArr[3]());

console.log(Math.floor(Math.random() * (100 - 50 + 1) - 50));
