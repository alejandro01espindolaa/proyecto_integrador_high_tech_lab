const { meses, dias, ordinal } = require('./data.js')

let currentYear = new Date().getFullYear()
let currentDay = new Date().getDay()
let currentDate = new Date ().getDate()
let currentMonth = new Date().getMonth()
  
function  date() {
    return dias[currentDay] + " " + currentDate + ordinal[currentDate] + " " + meses[currentMonth] + " " + currentYear
}
  
function printDate() {
    console.log("Today is " + date())
  }
  
function printDate() {
    console.log(`Today is ` + (function() {
        return dias[currentDay] + " " + currentDate + ordinal[currentDate] + " " + meses[currentMonth] + " "})())
    }
  
printDate()