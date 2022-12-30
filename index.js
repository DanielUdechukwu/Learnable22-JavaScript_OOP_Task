// Measures of Central Tendency
// MEAN

console.log(`Mean of a given array of numbers. \n`)
let myArr = [2, 5, 8, 24, 45, 12, 11, 40, 33];
let sum = 0

myArr.map(value => {
  sum += value
});

let mean = (sum / myArr.length);
console.log(`The mean of the given numbers is ${mean}\n\n`);

// ******************************* MEDIAN ***************************************//

console.log(`Median of a given array of numbers`)

let sortedArray = myArr.sort((a,b) => a-b);    // Sorting the array in ascending order
console.log(`The Array in ascending order is = ${sortedArray}\n`);

let checkOdd = sortedArray.length % 2;

if(checkOdd === 1 ){
  let verifOdd = (sortedArray.length) / 2;
  let odd = Math.round(verifOdd);
  console.log(`The median of the odd array is ${myArr[odd - 1]}\n`);
}else{
  let verifEven = (sortedArray.length) / 2;
  let newIndex = verifEven - 1;
  let sumIndexes = (myArr[newIndex] + myArr[verifEven])
  let median = sumIndexes / 2;
  console.log(`The median of the even array is ${median}\n`);
}

// ********************************** MODE **********************************//

// const highest = arr => (arr || []).reduce((acc, el) => {
//   acc.k[el] = acc.k[el] ? acc.k[el] + 1 : 1
//   acc.max = acc.max ? acc.max < acc.k[el] ? el : acc.max : el
//   return acc
// }, { k: {} }).max

// console.log(highest(myArray))




