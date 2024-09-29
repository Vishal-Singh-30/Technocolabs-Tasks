// constant variable kelvin
const kelvin = 293;
// celsius is 273 less than kelvin 
let celsius = kelvin - 273;
console.log(celsius);
// fahrenheit formula
let fahrenheit = celsius * (9/5) + 32;
// rounding off the fahrenheit value
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);

// celsius to newton scale conversion
let newton = celsius * (33/100);
newton = Math.floor(newton);
console.log(`The temperature is ${newton} degrees Newton.`);



