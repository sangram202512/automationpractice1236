//Check whether a number is positive.
let num = 5;
if (num > 0) {
    console.log(num + " is a positive number.");
}

//Check whether a number is negative.

let x = -55
if (x < 0) {
    console.log ("x is a negative number", x)
}


// check both condtions..

let number = 52
if (number > 0) {
    console.log ("number is positve", number)
}else {
    console.log("number is negative", number)

}

//Check whether a number is zero.

let a = 0
if (a === 0) {
    console.log("number is equal to zero", a)
}


//Check whether a number is even or odd.

var num2 = 33
if (num2 % 2 === 0) {
    console.log("number is even", num2)
}else {
    console.log("number is odd number", num2)
}

//Check whether a person is eligible to vote.
let age = 23 
if (age >= 18) {
    console.log("person is eligible to vote", age)
}else {    console.log("person is not eligible to vote", age)
}

//Check whether a student passed or failed.
let marks = 75
if (marks >= 45) {
    console.log ("student is pass", marks)
} else {
    console.log ("student is fail", marks)
}

//Find the greater number between two numbers.
let abc = 26
let pqr = 55
if (pqr > abc) {
    console.log ("pqr is greater than abc", pqr)
} else { 
    console.log ("abc is greater than pqr", abc)
}


//Check whether a number is divisible by 5.
let num4 = 50
if (num4 %5 == 0){
    console.log ("number is divisible by 5 =", num4)
}

//Check whether a number is divisible by both 3 and 7.
let num5 = 21
if (num5 % 3 === 0 && num5 % 7 === 0) {
    console.log("number is divisible by both 3 and 7", num5)
}

//Find the largest among three numbers.
let num6 = 55
let num7 = 66
let num8 = 77
if (num6 > num7 && num6 > num8) {
    console.log("num6 is the largest number", num6)
} else if (num7 > num6 && num7 > num8) {
    console.log("num7 is the largest number", num7)
} else {    console.log("num8 is the largest number", num8)
}

//Find the smallest among three numbers.
let num9 = 69
let num10 = 55
let num11 = 28
if (num9 < num10 && num9 < num11){
    console.log("num9 smaalest number ", num9)
}
    else if ( num10 < num9 && num10  < num11) {
        console.log("num10 is smallest number ", num10)
    }

 else {
    console.log("num11 is smallest number ", num11)
}

//Check whether a character is uppercase or lowercase.
let char = 'A'
if (char >= 'A' && char <= 'Z') {
    console.log("character is uppercase", char)
} else if (char >= 'a' && char <= 'z') {
    console.log("character is lowercase", char)
} else {
    console.log("character is not an alphabet", char)
}

//Check whether a number is a 3-digit number.
let num12 = 123
if (num12 >= 100 && num12 <= 999) {
    console.log("number is a 3-digit number", num12)
} else {
    console.log("number is not a 3-digit number", num12)
}

//Check whether a temperature is hot, cold, or moderate.
let temp = 35
if (temp > 30) {
    console.log("temperature is hot", temp)
} else if (temp < 15) {
    console.log("temperature is cold", temp)
} else {
    console.log("temperature is moderate", temp)
}   


//Calculate bonus based on salary conditions.
let salary = 60000
if (salary > 50000) {
    let bonus = salary * 0.1
    console.log("bonus is", bonus)
} else {
    console.log("no bonus for salary less than or equal to 50000", salary)
}



//Check whether a person is eligible for a driving license.
let age2 = 18
if (age2 >= 18) {
    console.log("person is eligible for a driving license", age2)
} else {
    console.log("person is not eligible for a driving license", age2)
}

//Check whether an entered day is weekday or weekend.
let day = "Saturday"
if (day === "Saturday" || day === "Sunday") {
    console.log("day is a weekend", day)
} else {
    console.log("day is a weekday", day)
}
