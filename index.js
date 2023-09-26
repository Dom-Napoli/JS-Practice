// let newInventoryCarModels = ['S1', 'T1', 'S2', 'S1', 'S2', 'S1']
// let newInventoryCarTypes = ['StockCar', 'Refrigerator', 'StockCar', 'Lorrie', 'Lorrie', 'Lorrie']
// let newInventoryYearBuilt = [1922, 2011, 1975, 2002, 1965, 1951]

// console.log(newInventoryCarTypes)
// console.log(newInventoryYearBuilt)    


// let i = 0;
// let typeS1Count = 0;

// while(i< newInventoryCarModels.length) {
//     console.log(newInventoryCarModels[i]);
//     if (newInventoryCarModels[i] === 'S1') {
// typeS1Count++;
//     }
//     i++;
// }
// console.log("Number of S1 Cars is: " + typeS1Count);


// const grid = [ 1, 2, 3, 4]
// let oddNumbers = grid.filter



// for(let i=0; i<grid.length; i++)
//  {
//  for(let j=0; j<grid [i].length; j++) {
//     console.log(grid [i] [j])
//  }
//}

// const ages = [32, 33, 16, 40];
// const result = ages.filter(checkAdult);

// function checkAdult(age) {
//   return age >= 18;
// }
// console.log(result)

// let meats=['beef', 'pork', 'fish']
// console.log(meats)

// meats.push[2];
// console.log(meats)

// meats.push('veal');
// console.log(meats)

// meats.pop('2');
// console.log(meats);

let myArray=[1, 2, 3, 4, 5]
console.log(myArray);

for (let i=0; i < myArray.length; i++) {
    console.log(myArray[i])
}
myArray.forEach(function(element) {
    console.log(element)
})

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
numbers.forEach(function(element) { 
    if(element %2 ===0) {
        console.log(element)
    }
})

function isEven(number) {
    if (number % 2 === 0) {
        console.log(number)
    }
}


