let numberArray:number[] = [1,2,3,4,5,6,7,8,9,10,11,12];
let wordArray:string[] = ["Hallo", "Welt", "Tasse", "Schreibtisch", "Stuhl", "Bürostuhl"];

const numbersDoubled = numberArray.map(num => num*2);
const filteredArray = wordArray.filter(word => word.length > 5);
const reducedArray = numberArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
const numbersSome = numberArray.some(num => num > 10);

console.log("initialNumbersArray: " + numberArray);
console.log("initialWordsArray: " + wordArray);
console.log("numbersDoubled: " + numbersDoubled);
console.log("wordsFiltered: " + filteredArray);
console.log("numbersReduced: " + reducedArray);
console.log("numbersSome: " + numbersSome);


// Bonustask

const list = [15, 6, 3213, 9, 0, 12, 8464 , 1, 1264, 481, 186, 1031, 194];
const sortedList = list.sort((a, b) =>  b - a);
console.log(sortedList);
const squaredNumbers = sortedList.map(num => num * num);
console.log(squaredNumbers);
const removedNumbers = squaredNumbers.slice(4, squaredNumbers.length - 2);
console.log(removedNumbers);
const removedByDivisible = removedNumbers.filter(num => num % 4 !== 0);
console.log(removedByDivisible);
const reducedArrayBonusTask = removedByDivisible.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(reducedArrayBonusTask)

