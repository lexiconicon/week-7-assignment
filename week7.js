/*  
1. Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    A. Programmatically subtract the value of the first element in the array from the value in the last element of the array. 
        - Do not use numbers to reference the last element, find it programmatically.
        - ages[7] - ages[0] is not allowed!
    B. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
    C. Use a loop to iterate through the array and calculate the average age.
(comment with shift option a)
*/

let ages = [3, 9, 23, 64, 2, 8, 28, 93]; //this created an array called ages

console.log(ages);
let ageDifference = (ages[ages.length - 1] - ages[0]); //this subtracts the first element from the last
console.log(ageDifference);
ages.push(24); //added another element to the array
console.log(ageDifference); //this checks the step above to ensure it's dynamic

sumOfAges = 0; // this is a variable to hold the sum of all the ages

for (i = 0; i < ages.length; i++) { //create a loop to calculate the average age
    sumOfAges += ages[i]
    console.log("index:", i, "sumOfAges:", sumOfAges); //this is to make sure that the function is working
}
let average = sumOfAges / ages.length; // dividing the sum by the length of the array gets the average
    console.log(average);



/* 
2. Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'.
    A. Use a loop to iterate through the array and calculate the average number of letters per name.
*/

let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob']; //create an array
let lengthOfName = 0 //creates the variable lengthOfAllNames to be used in the function

for (let i = 0; i < names.length; i++) { // this is declaring a function that will iterate through the array
    lengthOfName += names[i].length; // this will add the length of each element in the array with every iteration
    //we want to know the average # of names so we need the name and the number of letters
     console.log(`Name: ${names[i]} Length: ${lengthOfName}`); 
     console.log(lengthOfName / names.length); // this will calculate the average by dividing lengthOfName by the # of elements
}
// B. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
let nameList = '';
for (let i = 0; i < names.length; i++) { // this is declaring a function that will iterate through the array
    nameList = nameList.concat(names[i] + ' '); // this will combine the names in the array with each iteration while adding spaces
    console.log(nameList); // this prints it to the console
}
/* 3. How do you access the last element of any array? */

console.log("array[array.length - 1]"); // since you don't necessarily know how long the array is, do the array length minus 1

/* 4. How do you access the first element of any array? */

console.log('array[0]'); // the first element of an array is always at index zero


/*  5. Create a new array called nameLengths. Write a loop to iterate over the previously created names array and 
add the length of each name to the nameLengths array.
For example: 

let names = ["Kelly", "Sam", "Kate"];    // starting with this array
let nameLengths = [5, 3, 4];             // create a new array
*/
let nameLengths = [];

for (let i = 0; i < names.length; i++) { // calls a function to iterate through og names array
    nameLengths.push(names[i].length); // pushes to nameLengths all of the lengths of the names in the array
    console.log(nameLengths); // shows that all the lengths are added to the array
}


/* 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. */
sum = 0
for (let i = 0; i < nameLengths.length; i++) { 
    sum += nameLengths[i]; // adds the length of each name in the array to the sum with each iteration
    console.log("Sum: " + sum); //shows the sum of each iteration
}



/* 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. 
(i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').*/

function multiply(word, n) { //this declares the function and the two parameters
    let concatenate = word.repeat(n); //using .repeat will repeat word n number of times
    console.log(concatenate);
    }
multiply("Hello", 3); // to call a function you just start with the name, no need to console.log

/* 8. Write a function that takes two parameters, firstName and lastName, and returns a full name. 
The full name should be the first and the last name separated by a space. */

function fullName(firstName, lastName) { //declares function fullName with two paramaters, firstName and lastName
    return (`${firstName} ${lastName}`)  //returns a full name
} 
console.log(fullName("Mary", "Brown")); //example to make sure the function works

/* 9. Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100. */


let numberList = [2, 4, 72, 13, 22]; //setting an array to test the function

function bigSum(arraySize) {
    let totalArraySize = 0; // I'm not sure if it matters where I call a variable that's used in a function but here is the variable for my total
    for (let i = 0; i < arraySize.length; i++) { // this wil run the loop for the length of the array
        totalArraySize += arraySize[i]; // this adds each element to the total
        console.log(`Total: ${totalArraySize}`);
    }
     if (totalArraySize > 100) {  //note to self: put if statement in function but NOT in the loop aka pay attention to curly brackets
        console.log(true); //the prompt says return true but to make sure it works I'm adding console.log so it prints to console
        return true; // return has to go after console.log because once a function returns, it ends
        
    } else {
         console.log(false);
         return false;
    }
}

bigSum(numberList); //this runs a test instance through the function to make sure it works

/* 10. Write a function that takes an array of numbers and returns the average of all the elements in the array. */

let myNumbers = [2, 4, 7, 23, 34]; // sets an array so I can see if the function works 


function averageArray(array) { //declares a function
    arraySum = 0;  // setting up my variables for the function
    arrayAverage = 0;
    for (let i = 0; i < array.length; i++) { 
        arraySum += array[i];  //adds each element to the sum
    }
    console.log(arraySum);
    arrayAverage = (arraySum / array.length); //again please pay attention to the curly brackets so not everything is in the loop
    console.log(arrayAverage); //prints the average to the console so I can make sure it works
    return arrayAverage;
}

averageArray(myNumbers); // tests the function with the example array

/* 11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array 
is greater than the average of the elements in the second array. */
let numbers1 = [12, 13, 14, 15]; //test array 1
let numbers2 = [21, 2, 23, 30]; //test array 2

function arrayCompare(arrayA, arrayB) {
    let sum1 = 0;
    let sum2 = 0;
    for (const number of arrayA) { //the for of loop refers to each element of the array as number 
        sum1 += number; //this adds each element of arrayA to the sum
    }
    for (const number of arrayB) {
        sum2 += number;
    }
    if (sum1 > sum2) { // reminder to always put () with an if statement
        console.log(true); //prints to console so I can make sure the function is working
        return true;
    } else {
        console.log(false);
        return false;
    }
}
arrayCompare(numbers1, numbers2); //test instance

/* 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if 
it is hot outside and if moneyInPocket is greater than 10.50. */

function willBuyDrink(isHotOutside, moneyInPocket) { //declares the function and sets the two parameters
    if (isHotOutside && (moneyInPocket > 10.50)) { //creates a conditional so it can correctly return a boolean
        console.log(true); //prints to console to ensure that it works
        return true;
    } else {
        console.log(false);
        return false;
    }
}

willBuyDrink(true, 34); //I also tested with a number less than 10.50 to double check that it works

/* 13. Create a function of your own that solves a problem. In comments, write what the function does and why you created it. */


function didTheCatsEat(automaticFeederStatus, time) { // I made this function because my partner asked if the cats ate this morning since the cat feeder was empty and I didn't know the answer.
    if (automaticFeederStatus && (time == 6) || (time == 12)) { // The cats are fed at 6 AM and 6 PM. This function uses military time. 
        console.log(`The cats are being fed currently.`); // This states that the cats are being fed if it is at 6 AM or PM.
        return true; //this means the cats ate
    } else if (!automaticFeederStatus) { //this is if the automatic feeder is empty or broken.
        console.log(`The automatic feeder is empty or broken, so the cats were not fed.`); //this would report back if there is an issue with the feeder.
        return false;
    } else if (automaticFeederStatus && (time != 6) && (time != 12)) { //this reports back that everything is working if the automatic feeder is working and the time is not 6
        console.log(`The cats were fed at 6 and will be fed again at 6.`)
    }
}

didTheCatsEat(true, 6); //I ran through test instances of every scenario to make sure it works.
didTheCatsEat(false, 6);
didTheCatsEat(true, 12);
didTheCatsEat(true, 3);