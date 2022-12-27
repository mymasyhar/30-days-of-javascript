// ------------------------------ Exercises: Level 1 ------------------------------

//Declare an empty array;
const arr = [];

//Declare an array with more than 5 number of elements
const arrayElements = ['JavaScript', 'NodeJS', 'ReactJS', 'VueJS', 'AngularJS'];

//Find the length of your array
console.log(arrayElements.length);

//Get the first item, the middle item and the last item of the array
const firstItem = arrayElements[0];
const middleItem = arrayElements[Math.floor(arrayElements.length/2)];
const lastItem = arrayElements[arrayElements.length - 1];
console.log('first item : ',firstItem);
console.log('middle item : ', middleItem);
console.log('last item : ', lastItem);

//Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes = ['Masyhar', 'Muharam', 23, false, 'Indonesia', 'Programming'];

//Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];

//Print the array using console.log()
console.log(itCompanies);

//Print the number of companies in the array
console.log(itCompanies.length);

//Print the first company, middle and last company
const firstCompany = itCompanies[0];
const middleCompany = itCompanies[Math.floor(itCompanies.length/2)];
const lastCompany = itCompanies[itCompanies.length - 1];

console.log('first company : ', firstCompany);
console.log('middle company : ', middleCompany);
console.log('last company : ', lastCompany);

//Print out each company
console.log('1 :', itCompanies[0]);
console.log('2 :', itCompanies[1]);
console.log('3 :', itCompanies[2]);
console.log('4 :', itCompanies[3]);
console.log('5 :', itCompanies[4]);
console.log('6 :', itCompanies[5]);
console.log('7 :', itCompanies[6]);

//Change each company name to uppercase one by one and print them out
console.log(itCompanies[0].toUpperCase());
console.log(itCompanies[1].toUpperCase());
console.log(itCompanies[2].toUpperCase());
console.log(itCompanies[3].toUpperCase());
console.log(itCompanies[4].toUpperCase());
console.log(itCompanies[5].toUpperCase());
console.log(itCompanies[6].toUpperCase());

//Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompanies.toString().concat(' are big IT companies'));

//Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
if(itCompanies[2] == 'Yahoo'){
  console.log(itCompanies[2]);
} else {
  console.log('company is not found');
}

//Filter out companies which have more than one 'o' without the filter method
console.log(itCompanies[0].includes('oo'));
console.log(itCompanies[1].includes('oo'));
console.log(itCompanies[2].includes('oo'));
console.log(itCompanies[3].includes('oo'));
console.log(itCompanies[4].includes('oo'));
console.log(itCompanies[5].includes('oo'));
console.log(itCompanies[6].includes('oo'));

//Sort the array using sort() method
//console.log(itCompanies.sort());

//Reverse the array using reverse() method
//console.log(itCompanies.reverse());

//Slice out the first 3 companies from the array
//console.log(itCompanies.slice(0,3));

//Slice out the last 3 companies from the array
//console.log(itCompanies.slice(3,6));

//Slice out the middle IT company or companies from the array
//.log(itCompanies.slice(2, 5));

//Remove the first IT company from the array
itCompanies.shift();
console.log(itCompanies);

//Remove the middle IT company or companies from the array
console.log(itCompanies.splice(2,2));
console.log(itCompanies);

//Remove the last IT company from the array
console.log(itCompanies.pop());
console.log(itCompanies);

//Remove all IT companies
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file


//First remove all the punctuations and change the string to array and count the number of words in the array
let text = 'I love teaching and empowering people I teach HTML CSS JS React Python';
let words = text.split(' ');
console.log(words);
console.log(words.length)

//In the following shopping cart add, remove, edit items

const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']

  // i. add 'Meat' in the beginning of your shopping cart if it has not been already added
  shoppingCart.unshift('Meat');
  console.log(shoppingCart);
  // ii. add Sugar at the end of you shopping cart if it has not been already added
  if(!shoppingCart.includes('Sugar')){
    shoppingCart.push('Sugar')
  } else {
    console.log('Sugar has exist');
  }
  console.log(shoppingCart);
  // iii. remove 'Honey' if you are allergic to honey
  shoppingCart.splice(4,1);
  console.log(shoppingCart);

  // iv. modify Tea to 'Green Tea'
  shoppingCart[3] = 'Green Tea';
  console.log(shoppingCart);

//In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
//answer is on countries.js script

//In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
//answer is on web_techs.js script

//Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux'];
const backEnd = ['Node', 'Express', 'MongoDB'];

const fullStack = frontEnd.concat(backEnd);
console.log(fullStack);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

//The following is an array of 10 students ages:
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

//i. Sort the array and find the min and max age
ages.sort();
const minAge = ages[0];
const maxAge = ages[ages.length - 1];
console.log('ages list :', ages);
console.log('min age :', minAge);
console.log('max age :', maxAge);

//ii. Find the median age(one middle item or two middle items divided by two)
const midAge = ages.slice(4,6);
console.log('median :', (midAge[0] + midAge[1])/2);

//iii. Find the average age(all items divided by number of items)
const avgAge = ages[0] + ages[1] + ages[2] + ages[3] + ages[4] + ages[5] + ages[6] + ages[7] + ages[8] + ages[9];
console.log('average age :', avgAge / ages.length);

//iv. Find the range of the ages(max minus min)
const range = maxAge - minAge;
console.log('range :', range);

//v. Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array
const minAvgCompare = Math.abs((minAge - avgAge));
const maxAvgCompare = Math.abs(maxAge - avgAge);
console.log(minAvgCompare, maxAvgCompare);