// Convert object → JSON string

const stringto = '{"name":"sonu","age":30,"city":"New Delhi"}';
const jsonto = JSON.parse(stringto);
console.log(jsonto);
console.log(typeof jsonto);

const jsont={name:"sonu",age:30};
const jsontbject=JSON.stringify(jsont);
console.log(jsontbject);
console.log(typeof jsontbject)

