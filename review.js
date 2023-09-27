// String 
// Number
// Boolean
// Array
// Objects
// Undefined 

// var , let , const

// declare a variable 
let myFirstName = "Luis"; // this is a string
let myLastName = "Hernandez";
let myMiddleName = "Oscar";

// let fullName = myFirstName + " " + myLastName // Luis Hernandez
let fullName = `My full name is: ${myFirstName} ${myMiddleName} ${myLastName}`; // My full name is: Luis Oscar Hernadnez


let myPhoneNumber = "3123158179"; // this is a number 
console.log(typeof myPhoneNumber) // Number
console.log(myPhoneNumber + 1 ) // 31231581791


let myNumbers = [1,2,3,4,5].length // 5
console.log(myNumbers) // 5


["Luis", "Dom"]
[[1,1,2],[2,3,5],[8,5,6]]





function sumNumbers() {
    let numbers = [10,25,52,365];
    let sum = 0;
    
    for(let i = 0; i < numbers.length; i++) {
      console.log(numbers[i]);
      sum = sum + numbers[i];
    }
  
    return sum;
  }
  
  // sumNumbers();
  console.log(sumNumbers())








  function sumNumbers(numbersArray) {
    if(Array.isArray(numbersArray)) {
      let numbers = numbersArray;
      let sum = 0;
      
      for(let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
      }
    
      return sum;
    } else {
      return "Not an Array of numbers"
    }
  }
  
  // sumNumbers();
  console.log(sumNumbers([1,10,112,122,3331]));
  console.log(sumNumbers(5,2,1,2,1,2));
  console.log(sumNumbers("1", "4"));

  class User {

    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    
  }
  
  
  class Admin extends User {
  
    constructor(name, age, role) {
      super(name, age);
      this.admin = role
    }
    
  }
  
  
  let newUser1 = new User("Luis", 41);
  let newUser2 = new User("Dom", 51);
  let newUser3 = new Admin("Mike", 61, false);
  
  console.log(newUser1);
  console.log(newUser2);
  console.log(newUser3);