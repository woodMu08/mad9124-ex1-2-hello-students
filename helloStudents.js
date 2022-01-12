'use strict'

// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1
// 1. Read the JSON file into a variable called students

// 2. Iterate over the students array and print Hello with their full names to the console
// e.g. Hello Walter Baker

// 3. Print out the number of last names starting with the letter D
// e.g. Count of last names starting with D is 1


// // import students from './students.json' 

const say = message => console.log(message)
const students = require('./students.json')

// add a blank line
console.log("")

//output students firstname and lastname 
students.forEach(({firstName,lastName}) => say(`Hello ${firstName} ${lastName}`))


//Find students whose last name starts with D
const Dstudents= students.filter(
    (students => students.lastName.charAt(0)==`D`))


// console.log(Dstudents)

// add a blank line
console.log("")

//output the number of students whose last name starts with D 
console.log(`Count of last names starting with D is ${Dstudents.length}`)




// let counter = 0
// students.forEach(({lastName})=>{ if (lastName.startsWith('D')){
        
//         counter = counter + 1
        
//     }
// })

// console.log("")
// console.log(`Count of last names starting with D is ${counter}`)


