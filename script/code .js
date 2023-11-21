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

let firstName =  'Ntokozo'
let state = 'late'                     // works if the condition is true

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
let numbers = [9, 4, 2, 5, 10]

/*function highestNumber(args){
    for(let number of args){        // for of (is for the elemnts) for in (is for the index)
        console.log(number)
    }
}
highestNumber(numbers)
*/

console.log(Math.min(...numbers))
console.log(Math.max(...numbers))

let size =  Math.floor(numbers.length /2)
console.log(size)
