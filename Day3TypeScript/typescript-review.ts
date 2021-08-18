const SUNNY_DAY_MESSAGE: string = "It is sunny out today!!!";
let isSunny: boolean = true;

let numberSunnyDays: number = 1;

console.log(SUNNY_DAY_MESSAGE);

//Function 3


function sunnyDayMessage(isSunny: boolean, numberSunnyDays: number): string {
    return "";
}

//Function 1

// function hello(name: string){
//     return "Hi, " + name;
// }
// console.log(hello("Priti"));








//Function 2

function hello(name: string, isSunny: boolean){
    if(!isSunny){
        return "Hi, " + name;
    }

    //return "Hi, " + name + " it is sunny out today!";
    return `Hi,  ${name}, it is sunny out today!`;
}

console.log(hello("Priti", isSunny));