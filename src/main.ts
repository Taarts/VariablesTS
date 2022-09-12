import './style.css'

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

// type aboutYou = {
//   fullName: string
//   luckyNumber: number
//   favoriteMovies: string[]
// }
