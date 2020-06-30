/******************
 * YOUR CODE HERE *
 ******************/

// (1) Indexed Characters - adds the index of each character 
// before that character in the given string 
const indexedChars = function(str) {
  let indexed = '';
  for(let i = 0; i < str.length; i++) {
    indexed += i + str[i];
  }

  return indexed;
}

// (2) Exclaim -  returns the given sentence with every question 
// mark or period changed to an exclamation point 
const exclaim = function(sentence) {
  let exclaimed = '';
  for(let i = 0; i < sentence.length; i++) {
    if(sentence[i] === "?" || sentence[i] === ".") {
      exclaimed += '!';
    }

    else {
      exclaimed += sentence[i];
    }
  }

  return exclaimed;
}


// (3) RepeatIt - returns the given string repeated n times,
// where n is the second parameter 
const repeatIt = function(str, n) {
  let repeated = '';
  for(let i = 0; i < n; i ++) {
    repeated += str;
  }

  return repeated;
}

// (4) truncate - shortens a long string to 15 characters 
// plus an ellipsis (...) 
const truncate = function(str) {
  if(str.length < 18) {
    return str;
  }
  
  let truncated = '';
  for(let i = 0; i < 15; i++) {
    truncated += str[i];
  }

  return truncated + "...";
}

// (5) ciEmailify - creates an email from a two-part name  
const ciEmailify = function(name) {
  let email = '';
  for(let i = 0; i < name.length; i++) {
    
    if(name[i] === " ") {
      email += ".";
    }
    
    else {
      email += name[i].toLowerCase();
    }
  }

  email += "@codeimmersives.com";
  return email;
}

// (6) Reverse - reverses the given string
const reverse = function(str) {
  let reversed = '';
  let last = str.length - 1;
  for(let i = last; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// (7) OnlyVowels - returns only the vowels from a word
// .includes is forbodden. F in the chat.

// const onlyVowels = function(word){
//   let vowels = "aeiouAEIOU";
//   let vowelsOfWord = '';
//   for(let i = 0; i < word.length; i++) {
//     if(vowels.includes(word[i])) {
//       vowelsOfWord += word[i];
//     }
//   }

//   return vowelsOfWord;
// }

const onlyVowels = function(word) {
  let vowelsOfWord = '';
  for(let i = 0; i < word.length; i++) {
    let currLet = word[i];
    let isAVowel = currLet === "a" || currLet === "A" || currLet === "e" || currLet === "E" || currLet === "i" || currLet === "I" || currLet === "o" || currLet === "O" 
    || currLet === "u" || currLet === "U" ? true: false;

    if(isAVowel) {
      vowelsOfWord += currLet;
    }
  }
  return vowelsOfWord;
}

// (8) NumberedChars - adds the number pf each character before
// that character in the given string
const numberedChars = function(str) {
  let numbered = '';
  for(let i = 0; i < str.length; i++) {
    numbered += "(" + (i + 1) + ")" + str[i];
  }

  return numbered;
}

// (9) CrazyCase - returns the given string with alternating lower
// and upper cases
const crazyCase = function(str) {
  let crazy ='';
  for(let i = 0; i < str.length; i++) {
    let isEven = i % 2 === 0 ? true : false;
    if(isEven) {
      crazy += str[i].toLowerCase();
    }

    else {
      crazy += str[i].toUpperCase();
    }
  }

  return crazy;
}

// (10) TitleCase - returns a transformed version of the given string 
// where every word starts with a capital letter and every 
// non-word-starting letter is lowercased
const titleCase = function(str) {
  let titled = str[0].toUpperCase();
  for(let i = 1; i < str.length; i++) {
    let prev = str[i - 1];
    if(prev === " ") {
      titled += str[i].toUpperCase();
    } else {
      titled += str[i].toLowerCase();
    }
  }

  return titled;
}

// (11) CamelCase - returns the given string in camel case
const camelCase = function(str) {
  let camel = str[0].toLowerCase();
  for(let i = 1; i < str.length; i++) {
    let prev = str[i - 1];
    let curr = str[i];
    if(curr !== " " && prev === " ") {
      camel += curr.toUpperCase();
    }

    else if(curr !== " " && prev !== " ") {
      camel += curr.toLowerCase();
    }
  }

  return camel;
}

// (12) crazyCase2ReturnOfCrazyCase - same as crazyCase, 
// but does NOT count spaces as letters to upper or lower case
const crazyCase2ReturnOfCrazyCase = function(str) {
  let reallyCrazy = '';
  let actualCount = 0;
  for(let i = 0; i < str.length; i++) {
    let currLetter = str[i];
    
    // Don't Count if there is a space, but add it to string
    if(currLetter === " ") {
      reallyCrazy += currLetter;
    }
    
    // Do the crazy case as usual using the "actual" count excluding spaces
    else {
      let isEven = actualCount % 2 === 0 ? true: false;
      if(isEven) {
        reallyCrazy += currLetter.toLowerCase();
      } else {
        reallyCrazy += currLetter.toUpperCase();
      }
      
      actualCount++;
    }
  }

  return reallyCrazy;
}






 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
