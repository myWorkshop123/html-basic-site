let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
let myArray = myData.split(',');
let myNewString = myArray.join('||');
console.log(`this is myArray ${myArray}`);
console.log(`this is myNewString ${myNewString}`);
console.log(`type of myNewStrin ${typeof(myNewString)}`);
let dogNames = ['Rocket','Flash','Bella','Slugger'];
console.log(`this is a dogstring `,dogNames.toString())
myArray.shift();
console.log(myArray);

let myVariable = 11;

if (myVariable === 12)
console.log('this is one liner if ')

function multiply(num1 , num2){
    let result = num1 * num2;
    return result;
}

console.log(multiply(4, 7));
console.log(multiply(20, 20));
console.log(multiply(0.5, 3));
