/* function xify
replaces all characters in a string with an x
- parameters (string)
- operation read string character by charcter and change each one to an x, including the spaces
- return result
*/

console.log("Function: xify");
let str1 = "hello";
let str2 = "hi there";
console.log(str1);
console.log(str2);

function xify(string) {
    let i = 0
    let n=0
    let array=[]
    while (i<string.length) {
        array.push(string[i]);
        i++;
    }
    while (n<i) {
        array.pop();
        array.unshift("x");
        n++;
    }
    return array.join("");    
}


console.log(xify(str1));
console.log(xify(str2));
console.log();

/* function yellingChars
adds an exclamation point after each character in a string
- parameters (string)
- operation read string character by charcter into an array, adding an exclamation point after each space
- return result
*/
console.log("Function: yellingChars");
function yellingChars(string) {
    let i = 0
    let n=0
    let array=[]
    while (i<string.length) {
        array.push(string[i]);
        array.push("!")
        i++;
    }
    return array.join("");    
}

console.log(yellingChars(str1));
console.log(yellingChars(str2));
console.log();

/* function indexedChars
adds the index before each character in a string
- parameters (string)
- operation read string character by charcter into an array, adding the index before each character
- return result
*/
console.log("Function: indexedChars");
function indexedChars(string) {
    let i = 0
    let array=[]
    while (i<string.length) {
        array.push(i)
        array.push(string[i]);
        i++;
    }
    return array.join("");    
}

console.log(indexedChars(str1));
console.log(indexedChars(str2));
console.log();

/* function exlcaim
converts the period or queston mark at the end of a sentence to an exclamation point
- parameters (string)
- operation read string character by charcter into an array, check for a period or question mark and if found replace with an exclamation point.
- return result
*/
console.log("Function: exclaim");
let sent1 = "What are you doing?  Are you a fool?";
let sent2 = "This is fine."

function exclaim(string) {
    let i = 0
    let array=[]
    while (i<string.length) {
        if (string[i]==="." || string[i]==="?") {
            array.push("!")
        }else{
        array.push(string[i]);
        }
        i++;
    }
    return array.join("");    
}

console.log(exclaim(sent1));
console.log(exclaim(sent2));
console.log();

/* function truncate
shortens a given sentence to 15 characters followed by an ellipse
- parameters (string)
- check string length, if less then 15 characters, do nothing 
- if longer then 15 characters, read string character by charcter into an array stopping after 15 charactesr, add an ellipse tot the end of the string
- return result
*/
console.log("Function: truncate");
sent3 = "The fault, dear Brutus is not in our stars, but in ourselves.";
sent4 = "Well, that's just, like, your opinion man!";
function truncate(string) {
    let i = 0
   
    let array=[]
    while (i<16) {
        if (string.length<16) {
            array.push(string[i]);
        }else {
        array.push(string[i]);
        }
        i++;
    }
    if (string.length>15){
        array.push("...")
    }
    return array.join("");    
}
console.log(truncate(sent1));
console.log(truncate(sent2));
console.log(truncate(sent3));
console.log(truncate(sent4));
console.log();

/* function ciEmailify
create an email account from a two-part name in a single string
- parameters (str1)
- read the characters, convert them to all lowercase, add the names together with a period between them
- return result with "@codeimmersives.com" on the end
*/
console.log("Function: ciEmailify");
name1 = "Colin Jaffe";
name2 = "Anthony DeRosa";

function ciEmailify(nam) {
    nam=nam.toLowerCase()
    let i = 0
    let array=[]
    while (i<nam.length) {
        if (nam[i]===" ") {
            array.push(".");
        }else {
        array.push(nam[i]);
        }
        i++;
    }
    let nam2 = array.join("");
    return `${nam2}@codeimmersives.com`; 
    
}
console.log(ciEmailify(name1));
console.log(ciEmailify(name2));
console.log();


console.log("Function: reverse");
/*reverse a given string
- parameters (str1)
- read the characters, add them to a new array in reverse order
- return result 
*/
example1 = "colin";
example2 = "mesuara";
function reverse(str1) {
    let i = 0
    let array=[]
    while (i<str1.length) {
        array.push(str1[i]);
        i++;
        }
    array.reverse()
    return array.join("");
    
}
console.log(reverse(example1));
console.log(reverse(example2));
console.log();

console.log("Function: onlyVowels");
/*read a string and pick out only the vowels
- parameters (str1)
- read the characters into an array if they are a vowel
- return result 
*/
// example3 = name1;
example4 = "quickly";
// example5 = name2;
function onlyVowels(str1) {
    let i = 0
    let array=[]
    while (i<str1.length) {
        if (str1[i]==="a"||str1[i]==="e"||str1[i]==="i"||str1[i]==="o"||str1[i]==="u") {
            array.push(str1[i]); 
        }else if (str1[i]==="A"||str1[i]==="E"||str1[i]==="I"||str1[i]==="O"||str1[i]==="U") {
            array.push(str1[i]); 
        }
        i++;
        }
    return array.join("");
}
console.log(onlyVowels(name1));
console.log(onlyVowels(example4));
console.log(onlyVowels(name2));
console.log();

console.log("Function: crazyCase");
/*read a string convert every other letter to upper case
- parameters (str1)
- read the characters into an array using if-else statements to check if they are in an odd or even index location.  If an odd index, convert to upper case, if even index, convert to lower case
- return result 
*/
example6 = "hello"
example7 = "multiple words here"
example8="YELLING"
function crazyCase(str1) {
    let i = 0
    let array=[]
    while (i<str1.length) {
        if (i%2===0) {
            str1=str1.toLowerCase()
            array.push(str1[i]); 
        }else {
            str1=str1.toUpperCase()
            array.push(str1[i]);  
        }
        i++;
        }
    return array.join("");
}
console.log(crazyCase(example6));
console.log(crazyCase(example7));
console.log(crazyCase(example8));
console.log();

console.log("Function: titleCase");
/*read a string convert every first letter in a word to upper case
- parameters (str1)
- read the characters into an array using if-else statements to check if they are in the first letter in a word location.  If yes, convert to upper case, if no, convert to lower case
- return result 
*/
example9 = "return of the king"
example10 = "cOde iMMerSives"
function titleCase(str1) {
    let i = 0
    let array=[]
    while (i<str1.length) {
        if (i===0) {
            str1=str1.toUpperCase();
        }
        else if(str1[i-1]===" ") {
            str1=str1.toUpperCase();
        }
        else {
            str1=str1.toLowerCase();
        }
        array.push(str1[i]);
        i++;
        }
    return array.join("");
}
console.log(titleCase(example9));
console.log(titleCase(example10));
console.log();

console.log("Function: camelCase");
/*read a string convert every first letter in a word after the first word to upper case and remove the spaces between the words
- parameters (str1)
- read the characters into an array using if-else statements to check if they are in the first letter in a word location.  If yes, convert to upper case, if no, convert to lower case. If they are a space, remove the element.
- return result 
*/
example11 = "oh Hello"
example12 = "well yeah of course"
example13 = "Boy howdy"
function camelCase(str1) {
    let i = 0
    let array=[]
    while (i<str1.length) {
        if (str1[i]=== " ") {
            str1=str1.toUpperCase() 
        }
        else if(str1[i-1]===" ") {
            str1=str1.toUpperCase();
            array.push(str1[i]) 
        }
        else {
            str1=str1.toLowerCase();
            array.push(str1[i]); 
        }
        i++;
        }
    return array.join("");
}
console.log(camelCase(example11));
console.log(camelCase(example12));
console.log(camelCase(example13));
console.log();

console.log("Function: crazyCase2-ReturnOfCrazyCase");
/*read a string convert every other letter to upper case, but ignore the spaces
- parameters (str1)
- read the characters into an array using if-else statements to check if they are in the first letter in a word location.  If yes, convert to upper case, if no, convert to lower case. If they are a space, remove the element.
- return result 
*/
example14 = "multiple words here"
example15 = "crazy stuff"
function crazyCase2(str1) {
    let i = 0
    let n=0
    let array=[]
    while (i<str1.length) {
        if (str1[i]=== " ") {
            n++;
        }
        else if (n%2 === 0) {
            str1=str1.toLowerCase();
        }
         else {
            str1=str1.toUpperCase();
        }
        array.push(str1[i]);
        i++;
        n++;
        }
    return array.join("");
}
console.log(crazyCase2(example14));
console.log(crazyCase2(example15));
console.log();