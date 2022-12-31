function myFunction() {
  document.getElementById("demo").innerHTML = "Paragraph changed.";
}

console.log("Hello world!");


const myObj = {firstname:"John", lastname:"Doe"};
console.log(myObj);


console.log("GABE SANCHEZ");


console.log("ENCHILADAS SUIZAS");


const myArr = ["Orange", "Banana", "Mango", "Kiwi"];
console.log(myArr);


const str = 'Supercalifragilisticexpialidocious';
console.log(`${str} ${str.length}`);


console.log("666");
console.log(typeof 666);


console.log("1234567890123456789012345678901234567890n");
console.log(typeof 1234567890123456789012345678901234567890n);


var x = 1;
if (x === 1) {
  var x = 2;

  console.log(x);
}
console.log(x);



let  y = 11;
// Here y is 11
{  
  let y = 3;
  // Here y is 3
}
// Here y is 11
document.getElementById("demo").innerHTML = y;



const number = 42;
try {
  number = 99;
} catch (err) {
  console.log(err);
  // expected output: TypeError: invalid assignment to const `number'
  // (Note: the exact output may be browser-dependent)
}
console.log(number);




















