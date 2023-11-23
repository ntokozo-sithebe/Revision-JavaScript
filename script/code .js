/*
--- REVISION
*/

/* Create an array that contain 6 elemnts but the first two elements be numbers 
NB - let the 4th index be in lowercase 

let data = [3, ]
 */

//  Create two objects and add the objects into an array, log the objects as well

/*let person1 = {
    firstName: 'Thimna'
}
let person2 = {
    firstNname: 'Veronique'
}

//  creating an array

let allPersons = []

allPersons.push(person1) // remember push allows you to add 
allPersons.push(person2)
console.log(allPersons);
console.log(person1);
console.log(person2);*/


// When should we use an if statement

//let firstName =  'Ntokozo'
//let state = 'late'                     // works if the condition is true

// if statement
/*if(state == 'present'){
    console.log("present");   // 
}else if(state){
    console.log("late")
}
else{
    console.log("absent");
}
*/

// switch statement
// switch statement will return a boolean

/*switch(true){                     
    case state == 'present':
        console.log("present");
    break;
    case state != '':           // not equal to empty // can also write it as state == 'late'
        console.log("late");
    case state != '':
        console.log("late -> Final warning");
    break;
    default:
        console.log("absent")
} */
/*switch(true){
    case state == 'present':
        console.log("present");
        break;
        case state !="":
            console.log("late");
        break;
        case state !="":
            console.log("late -> Final warning");
        break;
        default:
            console.log("absent")
}
*/

// Math Method  -- used for time efficiency
//let numbers = [9, 4, 2, 5, 10]

/*function highestNumber(args){
    for(let number of args){        // for of (is for the elemnts) for in (is for the index)
        console.log(number)
    }
}
highestNumber(numbers)
*/

/*console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

let size =  Math.floor(numbers.length /2)
console.log(size)*/


/*let numbers = [9, 4, 20, 2, 5, 10, 9]
console.log(Math.max());

// inside the - () -- its called a rest parameter
function display(firstName){                  // parameter is the placeholder
    console.log('Your name is ${firstName}');
}

// the value you give will be the argument
display('Ntokozo')
display('Shaun')

//---------------------------

// The difference between rest parameter and the spread parameter

// REST PARAMETER - allows you to have more than 1 argument -- in a parameter () - rest parameter
// allows the user to pass as many values

// outside a function its a spread operator
*/

/*let numbers = [9, 4, 20, 2, 5, 10, 9]

function data (...args){
    console.log(args)
}
console.log(2,20);
console.log(9)

*/

/*let numbers = [9, 4, 20, 2, 5, 10, 9, 50]

console.log(Math.max(9, 4, 20, 2, 5, 10, 9));
console.log(Math.max(...numbers)); // need to have a spread operator as a spread operator loops through each and every number


// PI is used to calculate the area of circles and angles 
// round - rounds it up to the nearest
//ceil - rounds to the highest interger*/


/*
// Math methods
// PI is constant
console.log(Math.PI);
// Round the value to the nearest integer
console.log("round(3.5): ", Math.round(3.5));
console.log("round(3.4): ", Math.round(3.4));
console.log("round(3.0): ", Math.round(3.0));
console.log("ceil(3.5): ", Math.ceil(3.5));
console.log("ceil(3.4): ", Math.ceil(3.4));
console.log("trunc(3.5): ", Math.trunc(3.5));
console.log("trunc(3.4): ", Math.trunc(3.4));
console.log("trunc(3.0): ", Math.trunc(3.0));
console.log("floor(3.5): ", Math.floor(3.5));
console.log("floor(3.4): ", Math.floor(3.4));
console.log("floor(3.0): ", Math.floor(3.0));
console.log("random(): ", Math.floor(Math.random() * 10));
*/

// STRING METHODS

//DATE

/*let currentDate = new Date();  // recognises the date from the actual 
console.log(currentDate)
console.dir(currentDate)            //-- allows you to display and see all the features of the object

// if you want to see the year
console.log(currentDate.getUTCFullYear());
console.log(currentDate.getFullYear())

console.log(currentDate.getMonth() +1)    // it gives you the the previous month hence you need to add +1

// TO SPECIFY YOUR OWN DATE -- as a string

let anotherDate = new Date ("2001-07-18")
console.log(anotherDate);

let thirdAttempt = new Date(2021, 11, 11)
console.log(thirdAttempt);

*/
/*
let sentence = 'I love JavaScript'
console.log(sentence.length)

function arrOfChars(sentence){
    let characters = []
    for(let c of sentence){
        characters.push(c)

    } 
    return characters
}
console.log(arrOfChars(sentence));
///another way
///console.log(sentence.split(""))

console.log(sentence.replace("love", "LOOVEE "));

*/

// String methods

//let sentence = 'I love programming'
//console.log(sentence.length)
// function arrOfChars(sentence) {
//     let characters = []
//     for(let c of sentence) {
//         characters.push(c)
//     }
//     return characters
// }
// console.log(arrOfChars(sentence));
//console.log(sentence.split(" "));
//console.log(sentence.replace("love", "hate") );
//console.log(sentence.slice());
// sentence.lastIndexOf()
// sentence.endsWith()
// sentence.startsWith()
// sentence.includes()
// sentence.indexOf()
// sentence.concat()
// sentence.match()
// console.log(" Love :heart: :two_hearts:".repeat(4));
// sentence.substring()
// sentence.search()
// sentence.toUpperCase()
// sentence.toLowerCase()

// for emoji -- window key, question mark and dot


// OPERATORS

/*let numb1 = +prompt("Enter number 1")  //
let numb2 = +prompt("enter number 2") 
console.log(numb1 + numb2);
*/
/*
console.log(7 % 2); // the remainder is displayed

/// if we want to check if its an odd number
console.log(4333 % 2 > 0 ? "Odd number" : "Even number") // modulous
*/

// TERNARY OPERATOR

/*let salary = 50000
let bonus = 20000
let performance = true

//console.log(performance ?  salary + bonus : salary );
 
if(perfomance == false){
    console.log(salary);
                                            // YOU NEED TO DO THIS
}if(perfomance == true){
    console.log(salary + bonus)
}

*/

//BUILT IN FUNCTION

/*console.log(isFinite(-25))      // checks if the interger is true 
console.log(isNaN)



//page 16 in Joels book



let isReady = confirm("Are you ready?")
if(isReady){
    console.log("Quiz time");
}else{
    console.log("Self-Study")
}
*/



//RECURSIVE FUNCTION

//calls itself
// need an if statement to make it stop 

/*function numbersUTen(limit){
    if(cnt <= limit){
        console.log(cnt)
        cnt++
        numbersUTen(limit)
    }
}
numbersUTen(10)
*/


//Loops
// repeats a statement until a condition is met -- almost like an ascalator
//- for, while, do while, for

///for(let i=0; i<10; i++){           // i need to be less than 10 in order to be true -- if false the loop will stop
///    console.log(i)
//}

/*let cnt = 0
while(cnt < 10){
    console.log(cnt);
    cnt++
}*/


/*let numbers = [9, 6, 11, 33]
//for (let n of numbers){
 //   console.log(n);
//}
numbers.forEach((numbers, i)=>{
    console.log(numbers, i);
})

// to loop through your array you use forEach
// to loop through you


/*let person = {
    firstName: 'Ntokozo',
    lastName: 'Sithebe'
}

for (let p in person){
    console.log(p)
}
*/

//Cloning -- why - so that you dont create the exact copy
//let numb1 = [3, 5, 7, 9]
//let numb2 = [...numb1]
//numb1.length = 0                //  deleting the original array
//numb1 = []         // reassign it into a new array 
//console,log(numb1, numb2);

//ANOTHER WAY OF REMOVING ELEMENTS
//numb1.splice(0, numb1.length)
//console.log(numb1, numb2)

/*while(numb1.length > 0){
    numb1.pop
}
console.log(numb1, numb2);
*/

//ARRAY REDUCE & MAP

//reduce takes a call back function -- 
// adds the a + b 
//(a,b )                   // passing a function as an arguument
numbers = [3, 5, 7]
console.assert(numbers.reduce((a,b)=>{
    return(a+b)
}))








