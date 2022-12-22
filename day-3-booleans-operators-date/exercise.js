// ------------------------------ Exercises: Level 1 ------------------------------
//Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
console.log(`Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.`);
let firstName = 'masyharr';
let lastName = 'muharam';
let country = 'indonesia';
let city = 'jakarta';
let isMarried = false;
let year = 2022;
console.log(typeof firstName, typeof lastName, typeof country, typeof isMarried, typeof year);

//Check if type of '10' is equal to 10
console.log(`Check if type of '10' is equal to 10`);
console.log(typeof '10' === typeof 10);

//Check if parseInt('9.8') is equal to 10
console.log(`Check if parseInt('9.8') is equal to 10`);
console.log(parseInt('9.8') == 10);

//Boolean value is either true or false.
console.log(`Boolean value is either true or false.`);
  //i. Write three JavaScript statement which provide truthy value.
  console.log('truthy');

  //Write three JavaScript statement which provide falsy value.
  console.log(``);

//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(`//Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()`)
  
  // i. 4 > 3 -> true
  console.log(4 > 3);

  // ii. 4 >= 3 -> true
  console.log(4 >= 3);

  // iii. 4 < 3 -> false
  console.log(4 < 3);

  // iv. 4 <= 3 -> false
  console.log(4 <= 3);

  // v. 4 == 4 -> true
  console.log(4 == 4);

  // vi. 4 === 4 -> true
  console.log(4 === 4);

  // vii. 4 != 4 -> false
  console.log(4 != 4);

  // viii. 4 !== 4 -> false
  console.log(4!==4);

  // ix. 4 != '4' -> false
  console.log(4 != '4');

  // x. 4 == '4' -> true
  console.log(4=='4');

  // xi. 4 === '4' -> false
  console.log(4==='4');

  // Find the length of python and jargon and make a falsy comparison statement.
  console.log('python'.length != 'jargon'.length);

//Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(`Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()`);
  
  // i. 4 > 3 && 10 < 12 -> true
    console.log(4 > 3 && 10 < 12);

  // ii. 4 > 3 && 10 > 12 -> false
  console.log(4 > 3 && 10 > 12);

  // iii. 4 > 3 || 10 < 12 -> true
  console.log(4 > 3 || 10 < 12);

  // iv. 4 > 3 || 10 > 12 -> true
  console.log(4 > 3 || 10 > 12);

  // v. !(4 > 3) -> false
  console.log(!(4 > 3));

  // vi. !(4 < 3) -> true
  console.log(!(4 < 3));

  // vii. !(false) -> true
  console.log(!(false));

  // viii. !(4 > 3 && 10 < 12) -> false
  console.log(!(4 > 3 && 10 < 12));

  // ix. !(4 > 3 && 10 > 12) -> true
  console.log(!(4 > 3 && 10 > 12));

  // x. !(4 === '4') -> true
  console.log(!(4 === '4'));

  // xi. There is no 'on' in both dragon and python -> false
  let py = 'python'; // -> false
  let dr = 'dragon';
  console.log(!(py.includes('on')));
  console.log(!(dr.includes('on')));

//Use the Date object to do the following activities
console.log(`Use the Date object to do the following activities`);
  // i. What is the year today? -> 2022
  const yearToday = new Date();
  console.log(yearToday.getFullYear());

  // ii. What is the month today as a number? -> 10
  let monthToday = new Date();
  console.log(monthToday.getMonth());

  // iii. What is the date today? -> 17
  let todayDate = new Date();
  console.log(todayDate.getDate());

  // iv. What is the day today as a number? -> 4
  let today = new Date();
  console.log(today.getDay());

  // v. What is the hours now? -> 21
  let hoursNow = new Date();
  console.log(hoursNow.getHours());

  // vi. What is the minutes now? -> 43
  let minutesNow = new Date();
  console.log(minutesNow.getMinutes());

  // vii. Find out the numbers of seconds elapsed from January 1, 1970 to now.
  let numberElapsed = new Date();
  console.log(numberElapsed.getTime());

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triagle (area = 0.5 x b x h).
  /*
  const base = prompt(`Enter base`);
  const height = prompt(`Enter height`);
  const areaOfTriangle = 0.5 * base * height;
  console.log(alert(`the area of triangle is : ${areaOfTriangle}`));
  */

//Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/*
const sideA = parseInt(prompt('enter side A'))
const sideB = parseInt(prompt('enter side B'));
const sideC = parseInt(prompt('enter side C'));

const perimeter = sideA + sideB + sideC;
console.log(alert(`the perimeter of triangle is : ${perimeter}`));
*/

//Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width)
/*
const length = prompt('enter length');
const width = prompt('enter width');

console.log(alert(`the area of rectangle is : ${parseInt(length) * parseInt(width)}, and perimeter of rectangle is : ${2 * (parseInt(length) + parseInt(width))}`));
*/

//Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/*
const radius = parseInt(prompt('enter the radius'));
alert(`area of circle is: ${Math.PI * radius * radius} and circumfence of a circle is ${2 * Math.PI * radius}`);
*/

//Write a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
/*
const hoursWeekly = Number(prompt('enter hours :'));
const ratePerHour = Number(prompt('enter rate per hour :'));

const weeklyEarning = hoursWeekly * ratePerHour;
console.log(`your weekly earning is : ${weeklyEarning}`);
*/

//If the length of your name is greater than 7 say, your name is long else say your name is short.
const name = 'Masyhar';
console.log(name.length > 7 ? 'your name is long' : 'your name is short');

//Compare your first name length and your family name length and you should get this output.
console.log(firstName.length > lastName.length ? `your first name, ${firstName} is longer than your family name, ${lastName}` : 'vice versa');

const myAge = 250;
const yourAge = 25;
console.log(`i am ${myAge - yourAge} older than you`);

//Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.
/*
let birthOfYear = Number(prompt('enter birth of year'));
let currentYear = new Date().getFullYear();

let age = currentYear - birthOfYear;
console.log(age > 18 ? `you are ${age}. you are old enough to drive` : `you are ${age}. you will be allowed to drive after ${18 - age} years`);
*/

//Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years
/*
const age = Number(prompt('enter your age'));
console.log(`you lived ${age * 365 * 24 * 3600} seconds`);
*/

//Create a human readable time format using the Date time object
/*
const time = new Date();
const currentYear = time.getFullYear();
const currentMonth = time.getMonth()+1;
const currentDay = time.getDate();
const currentHour = time.getHours();
const currentMinutes = time.getMinutes();

  // i. YYYY-MM-DD HH:mm
    console.log(`${currentYear}-${currentMonth}-${currentDay} ${currentHour}:${currentMinutes}`);
  
  // ii. DD-MM-YYYY HH:mm
    console.log(`${currentDay}-${currentMonth}-${currentYear} ${currentHour}:${currentMinutes}`);

  // iii. DD/MM/YYYY HH:mm
    console.log(`${currentDay}/${currentMonth}/${currentYear} ${currentHour}:${currentMinutes}`);
*/
// ------------------------------ End Exercises: Level 2 ------------------------------


// ------------------------------ Exercises: Level 3 ------------------------------

//Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 )

let currentTime = new Date();
let currentYear = currentTime.getUTCFullYear();
let currentMonth = currentTime.getUTCMonth() + 1;
let currentDay = currentTime.getDate();

console.log(currentYear, currentMonth, currentDay);