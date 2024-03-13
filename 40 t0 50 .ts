// 40 t0 50 typscript questiuons and their solutions;

// QUESTION NUMBER 1 **;
/// Write a TypeScript function that takes an array of numbers as input and returns the average of those numbers.

//   ....solution....,
 let calculateAverage = ((numbers:number[]):number=>{
 let sum:number = 0;
 for (const number of numbers) {
    sum += number;
 }
 return sum / numbers.length;

 })
 const numbers:number[] =[1,2,3,4,5];
 const average = calculateAverage(numbers);
 console.log(average);

// QUESTION NUMBER # 42;*
// mplement a TypeScript class called Rectangle with properties width and height, and a method calculateArea() that returns the area of the rectangle.

// solution...;

class Rectangle{
    width:number = 0
    height:number = 0

    constructor(width:number,height:number){
    this.width = width;
    this .height = height;

    }
    calculateArea(){
 return this.width * this.height
    }
}

const myrectangle = new Rectangle( 2,6);

console.log(myrectangle.calculateArea())

// QUESTION NUMBER # 43;
// Write a TypeScript function that takes an array of strings as input and returns a new array with all strings capitalized.

//   SOLUTION.....;
 let capitalized = ((strings:string[]):string[]=>{
   return strings.map(str => str.toUpperCase() ) 

    }
    

 )

 const strings = ["fiza","kanwal","ali"]


 const capitalaaray = capitalized(strings)
 console.log(capitalaaray);


// QUESTION NUMBER # 44;
// Define a TypeScript type alias named Coordinates for an array with two elements, both of type number, representing latitude and longitude.

//   ....SOLUTION...;
 type Coordinates  = [number,number]

 const newcordinates:Coordinates = [13333.44,-3444.6];
 console.log(newcordinates)


// QUESATION NUMBER # 45;
//Create a TypeScript function called filterEvenNumbers that takes an array of numbers as input and returns a new array containing only the even numbers.

//   ...SOLUTION...;
let filterEvenNumbers = ((numbers:number[])=>{
  return numbers.filter(num => num% 2 === 0)

})

const numbers1 = [1,2,3,4,5,6,7,8];
const evennumbers = filterEvenNumbers(numbers1);
console.log(evennumbers);

// QUESTION NUMBER # 46;
// Implement a TypeScript class called Circle with properties radius and a method calculateArea() that returns the area of the circle.

//  ....SOLUTION.....;
 class circle {
  radius:number ;
     constructor(radius:number){
  this.radius = radius;
  }
  calculateAREA1(){
    return 2 * 3.14159 * this.radius
   }
}

const areaofcircle = new circle(9);

console.log(areaofcircle.calculateAREA1());

// QUESTION NUMBER # 47;
// Write a TypeScript function called mergeObjects that takes two objects as input and returns a new object with the properties from both objects merged.

//  ....SOLUTION....;

let mergeObjects1 =  ((obj1:object,obj2:object)=>{
  return {...obj1 , ...obj2};
  
  
})
const obj1 = { name:"fiza"}
const obj2 = {fname:"gm"};

const  mergeObjects = mergeObjects1(obj1,obj2)
console.log(mergeObjects);

// QUESTION NUMBER 48;
//Define a TypeScript enum named Color with values Red, Green, and Blue.
// .....SOLUTION;

enum Color{Red,Green,Blue}

let selectcolor:Color = Color.Green;
console.log(selectcolor);

// QUESTION NUMBER # 49;
//Create a TypeScript function called filterByLength that takes an array of strings and a number length as input, and returns a new array containing only the strings whose length is greater than or equal to length.

// ...SOLUTION,,,,
let filterByLength = ((strings:string[],length:number):string[]=>{
 return strings.filter(str => str.length >= length )
})

const words = ["hell","hi","morning"]
const newwords = filterByLength(words,2)
console.log(newwords)

// QUESTION NUMBER # 50;
//Implement a TypeScript class called Employee with properties name of type string, age of type number, and jobTitle of type string. Additionally, create a method printDetails() that logs the details of the employee to the console in a formatted manner.

// ....SOLUTION...;
class  Employee{
    nameemployee:string = "";
    ageemployee:number = 0;
    jobtitle:string = "";

    constructor( nameemployee:string,ageemployee:number, jobtitle:string){
        this.nameemployee = nameemployee;
        this.ageemployee = ageemployee;
        this.jobtitle = jobtitle;

    }
    detailofemployee(){
        console.timeLog(this.nameemployee,this.ageemployee,this.jobtitle);
    }

}

const detailid = new Employee("fiza",22,"softwearengeneer");
console.log(detailid);