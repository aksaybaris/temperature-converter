//Todays weather in Kelvin
const kelvin = 293;

//Todays weather in Celsius
let celsius = kelvin - 273;

//converts Celsius to Fahrenheit
let fahrenheit = celsius*(9/5)+32;

//Decimal result from the above calculation is rounded down to smallest integer
fahrenheit = Math.floor(fahrenheit);

console.log(`The temperature is ${fahrenheit} degrees Fahrenheit  `)

//Below equation converts Celsius to Newton and rounds down to smallest integer
let newton = Math.floor(celsius * (33/100));

console.log(`The temperature is ${newton} degrees Newton  `)
