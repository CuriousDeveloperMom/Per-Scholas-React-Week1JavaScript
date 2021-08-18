var SUNNY_DAY_MESSAGE = "It is sunny out today!!!";
var isSunny = true;
var numberSunnyDays = 1;
console.log(SUNNY_DAY_MESSAGE);
//Function 3
function sunnyDayMessage(isSunny, numberSunnyDays) {
    return "";
}
//Function 1
// function hello(name: string){
//     return "Hi, " + name;
// }
// console.log(hello("Priti"));
//Function 2
function hello(name, isSunny) {
    if (!isSunny) {
        return "Hi, " + name;
    }
    //return "Hi, " + name + " it is sunny out today!";
    return "Hi,  " + name + ", it is sunny out today!";
}
console.log(hello("Priti", isSunny));
