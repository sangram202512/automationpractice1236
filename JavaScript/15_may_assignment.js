//Reverse a string using loop

let str = "Sangram Patil";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(reversed);


//Find largest number in array

let arr = [10, 20, 5, 30, 15];
let largest = arr[0];
for (let i = 1; i < arr.length; i++) {
    if (arr[i] > largest) {
        largest = arr[i];
    }
}
console.log("Largest number in array is:", largest);



let orderAmount = 2500;
//let premiumUser = true;

if (orderAmount >= 2000) {

        console.log("You got 30% discount");
    }
    else if (orderAmount >= 2500) {
        console.log("You got 20% discount");
    }
    else if (orderAmount >= 3000) {
        console.log("You got 10% discount");
    }

else {
    console.log("No discount available");
}