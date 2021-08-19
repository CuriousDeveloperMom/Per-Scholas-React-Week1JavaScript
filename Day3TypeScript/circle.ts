/**
 *Here are the formulas to get information about a circle:
 pi is 3.14159
 x^2 means "x squared": example: 3^2 = 3*3 = 9
 area = pi * radius^2
 diameter = radius*2
 circumfrence = pi * diameter
​
 Complete the following functions and add function param and return type annotations
 */
​
const pi = 3.14159;
let radius = 2.7;

 function getArea(radius: number): number{
​   return (pi * (radius * radius));
 }
​
 function getDiameter(radius: number): number {
​   return (radius * 2);
 }
​
 function getCircumfrence(radius: number): number {
​   return pi * diameter;
​}

 console.log(`Area of circle is : ${getArea(radius).toFixed(2)}`);
 let diameter = getDiameter(radius);
 console.log(`Diameter of circle is : ${diameter.toFixed(2)}`);
 console.log(`Circumfrence of circle is : ${getCircumfrence(radius).toFixed(2)}`);