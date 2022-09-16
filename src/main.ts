import './style.css'
// Practice Creating Variables
// Create a variable that stores the numberOfCupsOfCoffee that you drink every day.
let numberOfCupsOfMatcha = 2
// Create a variable called fullName and set it equal to your full name.
const fullName: string = 'Tricia'
// Use console.log and your variables, numberOfCupsOfCoffee and fullName to output all three on one line.
const message = `Hi, my name is ${fullName} and I drink ${numberOfCupsOfMatcha} cups of matcha a day.`
console.log(message)

// Create an variable that stores an object. Make the properties of the object fullName, luckyNumber , and favoriteMovies. Where fullname is your full name, luckyNumber is a number value of your favorite number, and favoriteMovies is an array of strings of a few of your top movies. NOTE: Try doing this using object literal: const aboutMe = { } and put the properties inside.

const aboutMe = {
  fullName: 'Tricia',
  luckyNumber: 13,
  favoriteMovies: [
    'Interstellar',
    'The Fifth Element',
    "Le Fabuleux Destin d'Amélie Poulain",
  ],
}

console.table(aboutMe)

/* Practice Getting Input From the User

    Using window.prompt, Ask the user for their name and store it in a variable named userName.
    Use console.log to show a greeting to the user, using their name.
*/
// type answer = {
// userName: string
// firstOperand: string | null
// secondOperand: string | null
// }
// const userName = window.prompt('What is your name?')
// console.log(`Hello, ${userName}!`)

// const firstOperand = window.prompt('Enter a number')
// console.log(`You entered ${firstOperand}`)

// const secondOperand = window.prompt('Enter another number')
// console.log(`You entered ${secondOperand}`)

// /* Doing Math

//     Add the operand variables from above and save the results in a variable named sum.*/
// const sum = parseFloat(firstOperand) + parseFloat(secondOperand)
// console.log(`The sum of ${firstOperand} and ${secondOperand} is ${sum}`)

// /*    Subtract the secondOperand variable from the firstOperand variable and save the results in a variable named difference.*/
// const difference = parseFloat(firstOperand) - parseFloat(secondOperand)
// console.log(
//   `The difference of ${firstOperand} and ${secondOperand} is ${difference}`
// )
// /*Multiply the operand variables and save the results in a variable named product.*/
// const product = parseFloat(firstOperand) * parseFloat(secondOperand)
// console.log(
//   `The multiplication of ${firstOperand} and ${secondOperand} is ${product}`
// )
// /*Divide the firstOperand by the secondOperand and save the results in a variable named quotient.*/
// const quotient = parseFloat(firstOperand) / parseFloat(secondOperand)
// console.log(
//   `The quotient of ${firstOperand} and ${secondOperand} is ${quotient}`
// )
// /*Find the remainder when one operand is divided by the other and save the results in a variable named remainder.*/
// const remainder = parseFloat(firstOperand) % parseFloat(secondOperand)
// console.log(
//   `The remainder of ${firstOperand} and ${secondOperand} is ${remainder}`
// )

/*    Use console.log to present the user, in a meaningful way, each of the values for the sum, difference, quotient, product, and remainder variables. (e.g. perhaps one of your outputs is similar to If you add 4 and 5 you get 9 if 4 and 5 were the input)
 */
// <---------- Using Arrays ---------->

const numbers: Array<number> = [
  42384, 36989, 19936, 48940, 26848, 15493, 20378, 44231, 26439, 38123, 45555,
  33221, 41803, 42597, 18982, 47887, 38932, 19367, 29891, 34762, 17501, 31591,
  23595, 18227, 27896, 41956, 24168, 17110, 30647, 24802, 46449, 34647, 41766,
  32567, 32175, 37004, 10658, 22079, 36659, 48510, 18366, 15405, 37644, 16298,
  48066, 41958, 28784, 34858, 23662, 13975, 12970, 35935, 35489, 14766, 36153,
  20477, 29011, 43288, 41553, 29040, 25826, 38067, 33843, 38384, 47780, 45139,
  44736, 43417, 33934, 37690, 17497, 44305, 20147, 31690, 39583, 42192, 26108,
  34864, 20267, 21853, 29122, 35519, 18448, 10648, 29051, 44107, 41781, 40089,
  12967, 11733, 16896, 30613, 48257, 38066, 15718, 31090, 33458, 20457, 35173,
  11074,
]

const smallest = Math.min(...numbers)
console.log(smallest)

const largest = Math.max(...numbers)
console.log(largest)

const arraySum = numbers.reduce((a, b) => a + b, 0)
console.log(arraySum)

const arrayAverage = arraySum / numbers.length
console.log(arrayAverage)

const stats = {
  smallest: 10648,
  largest: 48940,
  sum: 3092052,
  average: 30920.52,
}

console.table(stats)

const sumOfOdd = numbers
  .filter((maybeOdd) => maybeOdd % 2)
  .reduce((a, b) => a + b)

console.log(sumOfOdd)

const sumOfEven = numbers
  .filter((maybeEven) => !(maybeEven % 2))
  .reduce((a, b) => a + b)
console.log(sumOfEven)
