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



function greeting(name, gender, isSelf) {

    // do stuff here ...

    if(isSelf)
       return  `${greetingWords[1].charAt(0).toUpperCase()} ${greetingWords[]}, ${prefixes[0]} name is ${name}`; // use template literal for string to return
    else if(gender === "nonbinary")
       return  `${greetingWords[2]}, ${prefixes[3]} name is ${name}`; 
    else if (gender === "female")   
       return  `${greetingWords[0]}, ${prefixes[2]} name is ${name}`; 
    else if (gender === "male")   
       return  `${greetingWords[0]}, ${prefixes[1]} name is ${name}`; 
  }

//   function capitalizeFLetter(greetingWords) {

       
//        // code below is same as: const upperCaseFirstLetter = word.charAt(0).toUpperCase();
//        let firstLetUpperCase = word.charAt(0).toUpperCase();
//        const restWord = word.slice(1);
     
//         //return firstLetUpperCase + restWord;
     
     
//        // The line of code below does the same as all the code above
//        return word.charAt(0).toUpperCase() + word.slice(1);
//      }

  const message = greeting("Priti", "female", true);
  console.log(message);

  const message1 = greeting("Xyz", "nonbinary", false);
  console.log(message1);

  const message2 = greeting("Abc", "female", false);
  console.log(message2);

  const message3 = greeting("Zzz", "male", false);
  console.log(message3);
