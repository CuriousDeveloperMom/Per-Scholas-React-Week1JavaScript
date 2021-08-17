const myObject = {
    a : "this is property a",
    mySecondObjectProperty : "second object property",
    "x": "the x key on my object",
    "2": "the key that is number 2",
    3: "key that is 3"
}

console.log("my object ", myObject);

const myInfo = {
    "name": "Priti",
    "birthday": 01031978,
    "citiesLivedIn": ["San Francisco", "New York"],
    "isHuman": true,
    "planetsVisited": null,
    "personalInfo" : {
        "favoriteFood" : "Mexican",
    }
};

console.log("My Info printed as Object");
console.log(myInfo);

console.log("My Info printed as String in the JSON format");
console.log(JSON.stringify(myInfo));

console.log(myInfo);

const myDetails = {
    name: "Priti",
    birthday: 01031978,
    citiesLivedIn: ["San Francisco", "New York"],
    isHuman: true,
    planetsVisited: null,
    personalInfo : {
        "favoriteFood" : "Mexican",
    }
};

console.log("My Info printed as Object");
console.log(myDetails);

console.log("My Info printed as String in the JSON format");
console.log(JSON.stringify(myDetails));

function sayHi(name, age){
    //return "my name is : " + name;
    return `my name is  ${name} and I am ${age} years old`;
}

console.log(sayHi("Priti", 35));