// Functie predefinita JS
const ridicareLaPutere = function (a, b) {
  return Math.pow(a, b);
};

console.log(ridicareLaPutere(3, 2));

// Function expression
const ridicareLaPutereManual = function (baza, exponent) {
  let rezultat = 1;
  for (let i = 1; i <= exponent; i++) {
    rezultat = rezultat * baza;
  }
  return rezultat;
};

console.log(ridicareLaPutereManual(3, 2));

// Function declaration
function ridicareLaPutereManual2(baza, exponent) {
  let rezultat = 1;
  for (let i = 1; i <= exponent; i++) {
    rezultat = rezultat * baza;
  }
  return rezultat;
}

console.log(ridicareLaPutereManual2(2, 3));

// Arrow function
const ridicareLaPutereManual3 = (baza, exponent) => {
  let rezultat = 1;
  for (let i = 1; i <= exponent; i++) {
    rezultat = rezultat * baza;
  }
  return rezultat;
};

console.log(ridicareLaPutereManual3(2, 4));
