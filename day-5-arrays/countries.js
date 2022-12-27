//Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

// ------------------------------ Exercises: Level 2 ------------------------------

//4. In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
if(countries.includes('Ethiopia')){
  console.log('ETHIOPIA');
  console.log(countries);
}else{
  countries.push('Ethiopia');
  console.log(countries);
}

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

//Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

/*
countries.sort();
countries.splice(10,1);
console.log(countries);
*/

//Find the middle country(ies) in the countries array

/*
const midCountries = countries.slice(4,7);
console.log(midCountries);
*/

//Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.
console.log(countries.length);

let firstGroupCountries = countries.slice(0, countries.length/2);
let secondGroupCountries = countries.slice(countries.length/2, countries.length - 1);

if(countries.length % 2 == 0){
  console.log(firstGroupCountries, secondGroupCountries);
} else {
  let lastIndexCountries = countries[countries.length-1];
  firstGroupCountries.push(lastIndexCountries);
  console.log(firstGroupCountries, secondGroupCountries);
}

//let firstGroupCountries = countries.slice(0, countries.length/2);
//let lastGroupCountries = [];
//console.log(firstGroupCountries);

// ------------------------------ End Exercises: Level 3 ------------------------------

