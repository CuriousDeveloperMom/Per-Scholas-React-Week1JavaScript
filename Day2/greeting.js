/*
Use the strings in the arrays to form a sentence like: "Hi, my name is <Name>
Be sure to have beginning words of sentences with the proper case.

Console log the result

Use a different greeting word for each gender
Use "his" for men, "her" for women, "their" for nonbinary.

Use "my" if the isSelf argument is true

*/

const greetingWords = ["hello","hi","hey"];
const prefixes = ["my", "his", "her", "their"];


/**
 @param {string} name
        name of person
 @parm  {string} gender
        Possible values of "gender" argument are "male", "female", "nonbinary"
 @param {boolean} isSelf
 @returns {string}
          greeting sentence

*/

function capitalize(str){
       return str.charAt(0).toUpperCase() + str.slice(1);
}

function greeting(name, gender, isSelf) {

    // do stuff here ...
    // use template literal for string to return

    let greeting = '';
    let prefix = '';
    
    if(isSelf){
       greeting = capitalize(greetingWords[1]);
       prefix = prefixes[0];
    }  
    else if(gender === "nonbinary"){
       greeting = capitalize(greetingWords[2]);
       prefix = prefixes[3];
    } else if (gender === "female"){
       greeting = capitalize(greetingWords[0]);
       prefix = prefixes[2];
    } else if (gender === "male"){
       greeting = capitalize(greetingWords[0]);
       prefix = prefixes[1];
    }
       return  `${greeting}, ${prefix} name is ${capitalize(name)}`; 
  }

  const message = greeting("priti", "female", true);
  console.log(message);

  const message1 = greeting("xyz", "nonbinary", false);
  console.log(message1);

  const message2 = greeting("abc", "female", false);
  console.log(message2);

  const message3 = greeting("zzz", "male", false);
  console.log(message3);
