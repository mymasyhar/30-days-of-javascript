// ================================== START LEVEL 1 EXERCISE ==============================================================================================

//Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let challenge = '30 Days Of JavaScript';

//Print the string on the browser console using console.log()
console.log(challenge);

//Print the length of the string on the browser console using console.log()
console.log(challenge.length);

//Change all the string characters to capital letters using toUpperCase() method
console.log(challenge.toUpperCase());

//Change all the string characters to lowercase letters using toLowerCase() method
console.log(challenge.toLowerCase());
//Cut (slice) out the first word of the string using substr() or substring() method
let substringChallenge1 = challenge.substr(0,2);
let substringChallenge2 = challenge.substring(0,2);
console.log(substringChallenge1);
console.log(substringChallenge2);

//Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
let substringChallenge3 = challenge.substr(3,4);
console.log(substringChallenge3);

//Check if the string contains a word Script using includes() method
let containString = challenge.includes('Script');
console.log(containString);

//Split the string into an array using split() method
let splitString = challenge.split();
console.log(splitString);

//Split the string 30 Days Of JavaScript at the space using split() method
let splitStringSpace = challenge.split(' ');
console.log(splitStringSpace);

//'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let bigCompany = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
let splitStringComma = bigCompany.split(',');
console.log(splitStringComma);

//Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
let replaceChallenge = challenge.replace('JavaScript', 'Python');
console.log(replaceChallenge);

//What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
let findWordIndex15 =  challenge.charAt(15);
console.log(findWordIndex15);

//What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
let findLetterJ = challenge.charCodeAt(11);
console.log(findLetterJ);

//Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
let findPositionA = challenge.indexOf('a');
console.log(findPositionA);

//Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
let findLastPositionA = challenge.lastIndexOf('a');
console.log(findLastPositionA);


let word = 'You cannot end a sentence with because because because is a conjunction';

//Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.indexOf('because'));

//Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(word.lastIndexOf('because'));

//Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let findBecause = word.search('because');
console.log(findBecause);

//Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let wordToTrim = ' 30 Days Of JavaScript ';
let trimmingWord = wordToTrim.trim('');
console.log(trimmingWord);

//Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(trimmingWord.startsWith('30'));

//Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(trimmingWord.endsWith('cript'));

//Use match() method to find all the a’s in 30 Days Of JavaScript
let substring = /a/gi;
const result = challenge.match(substring);
console.log(result);

//Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let firstSentence = '30 Days Of';
let lastSentence = 'JavaScript';
let combineSentence = firstSentence.concat(' ', lastSentence, '\n');
console.log(combineSentence);

//Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(combineSentence.repeat(2));

// ================================== END LEVEL 1 EXERCISE ==============================================================================================


// ================================== START LEVEL 2 EXERCISE ==============================================================================================

//Using console.log() print out the following statement: 
//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(`'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.`);

//Using console.log() print out the following quote by Mother Teresa:
//"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log(`"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same 
-- with charity you give love, so don't just give money but reach out your hand instead."`);

//Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let stringToNum = parseInt('10');
let compareNum = 10;
console.log(stringToNum === compareNum);

//Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let strFloatNum = parseFloat('9.8');
console.log(Math.ceil(strFloatNum) === compareNum);

//Check if 'on' is found in both python and jargon
let text1 = 'python jargon';
let text2 = 'jargon';
let pattern = /on/g;
console.log(text1.match(pattern));
console.log(text2.match(pattern));

//I hope this course is not full of jargon. Check if jargon is in the sentence.
let textJargon = 'I hope this course is not full of jargon';
pattern = /jargon/g;
console.log(textJargon.match(pattern));

//Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 100));

//Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 50) + 50);

//Generate a random number between 0 and 255 inclusively.
console.log(Math.floor(Math.random() * 255) + 1);

//Access the 'JavaScript' string characters using a random number.
let randomStr = 'JavaScript';
let indexStr = Math.floor(Math.random() * randomStr.length);
console.log(randomStr[indexStr]);

//Use console.log() and escape characters to print the following pattern.
/*
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
*/
console.log('1\t1\t1\t1\t1\n2\t1\t2\t4\t8\n3\t1\t3\t9\t27\n4\t1\t4\t16\t64\n5\t1\t5\t25\t125');

//Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let startSentence = 'You cannot end a sentence with because because because is a conjunction';
let splitSubstr = /because /g;
let resultStr = startSentence.split(splitSubstr).join('');
console.log(resultStr);

// ================================== END LEVEL 2 EXERCISE ==============================================================================================

// ================================== START LEVEL 3 EXERCISE ==============================================================================================

//'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
startSentence = 'Love is the best thing in this world. Some found their love and some are still looking for their love.';
let loveWord = /love/g;
console.log(startSentence.match(loveWord).length);

//Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
startSentence = 'You cannot end a sentence with because because because is a conjunction';
let matchSentence = /because/g;
console.log(startSentence.match(matchSentence).length);

//Clean the following text and find the most frequent word (hint, use replace and regular expressions).
let sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
resultStr = sentence.replace(/[^\w\s]/gi, '');
console.log(resultStr);

//Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
let statement = 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.';
let regexIncomeStr = statement.match(/[\d]{4,6}/g);
let salary = parseInt(regexIncomeStr[0]);
let annualBonus = parseInt(regexIncomeStr[1]);
let course = parseInt(regexIncomeStr[2]);

console.log(salary + annualBonus + course);