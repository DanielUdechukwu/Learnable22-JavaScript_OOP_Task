//************************************ RANGE *******************************//
let myArray = [1, 3, 4, 6, 5, 3, 4, 4, 1, 1, 7, 8, 9, 4,];

let sortRange = myArray.sort((a, b) => a - b);
console.log(sortRange);

let range = 0;

range = myArray[myArray.length - 1] - myArray[0];
console.log(`The range of the array is = ${range}\n`);


// *********************************** VARIANCE ****************************//
// let myArray2 = [2, 5, 8, 24, 45];
let mySum = 0

myArray.map(value => {
  mySum += value
});

let meanOfArray = parseFloat(mySum / myArray.length).toFixed(2);
// console.log(`The mean of the given numbers is ${meanOfVariance}\n`);
let myArrayMutated = []
myArray.forEach(function (e) {
  let xx = e - meanOfArray;
  myArrayMutated.push(Number(parseFloat(xx).toFixed(2)))
})

myArrayMutated2 = []
myArrayMutated.forEach((e) => {
  let powerOfVariance = e ** 2;
  myArrayMutated2.push(Number(parseFloat(powerOfVariance).toFixed(2)))
});

let sumInVariance = 0
myArrayMutated2.map(e => {
  sumInVariance += e
});

let variance = parseFloat(sumInVariance / (myArray.length - 1)).toFixed(3);
console.log(`The variance of the array is = ${variance}\n`);


// ******************************** STANDARD DEVIATION ******************************//

let standardDeviation = variance ** 2;
console.log(`The standard deviation of the array is = ${standardDeviation}\n`);



//******************************** MEAN DEVIATION *********************************//

// Since we already have mean of the array
let devistionOfDataPoint = [];
myArray.map(value => {
  devistionOfDataPoint.push(parseFloat((Number(value - meanOfArray)).toFixed(2)));
});

// console.log(devistionOfDataPoint);
let xy = [];
for(let i = 0; i < devistionOfDataPoint.length; i++){
  xy.push(Math.abs(devistionOfDataPoint[i]));
}
// console.log(xy);

let sumOfDataPoint = 0;
xy.map(e => {
  sumOfDataPoint += e;
})

// console.log(sumOfDataPoint);
let meanDeviation = sumOfDataPoint / 2;
console.log(`The mean deviation of the array = ${meanDeviation}`)


//********************************QUARTILE DEVIATION ***************************//

let sortedQuartileArray = []
sortedQuartileArray = myArray.sort((a,b) => a-b);
// console.log(sortedQuartileArray);

let firstQuarter = Math.floor((1/4) * (sortedQuartileArray.length + 1))
// console.log(firstQuarter)
let thirdQuarter = Math.floor((3/4) * (sortedQuartileArray.length + 1))
// console.log(thirdQuarter)

let firstQuartileSum = (sortedQuartileArray[firstQuarter - 1] + sortedQuartileArray[firstQuarter]) / 2;
let thirdQuartileSum = (sortedQuartileArray[thirdQuarter - 1] + sortedQuartileArray[thirdQuarter]) / 2;

// console.log(firstQuartileSum)
// console.log(thirdQuartileSum)

let quartileDeviation = (thirdQuartileSum - firstQuartileSum) / 2;

console.log(`The quartile deviation is = ${quartileDeviation} \n`)