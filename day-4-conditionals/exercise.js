// ------------------------------ Exercises: Level 1 ------------------------------

//Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.
/*
const age = Number(prompt('enter your age'));
if(age > 18){
  console.log('you are old enough to drive')
} else {
  console.log(`you are left with ${18 - age} years to drive`);
}
*/


//Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.
/*
const myAge = Number(prompt('enter your age'));
const yourAge = 23;

if(myAge > yourAge){
  console.log(`you are ${myAge-yourAge} years older than me`);
} else if (myAge == yourAge){
  console.log(`we're at the same age`);
}
else {
  console.log(`you are ${Math.abs(myAge - yourAge)} years younger than me`);
}
*/

//If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
  let a = 3;
  let b = 4;
  //using if else
  if(a > b){
    console.log(`${a} is greater than ${b}`);
  } else {
    console.log(`${a} is less than ${b}`);
  }

  //ternary operator.
  console.log(a > b ? `${a} is greater than ${b}` : `${a} is less than ${b}`);

//Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/*
const num = Number(prompt('enter number'));
if(num % 2 == 0){
  console.log(`${num} is an even number`);
} else {
  console.log(`${num} is an odd number`);
}
*/

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

//Write a code which can give grades to students according to theirs scores:
  /*
    80-100, A
    70-89, B
    60-69, C
    50-59, D
    0-49, F
  */

  let grade = 76;
  if(grade >= 90){
    console.log('A');
  } else if(grade > 70 && grade < 90){
    console.log('B');
  } else if(grade > 60 && grade < 70){
    console.log('C')
  } else if (grade > 50 && grade < 60){
    console.log('D');
  } else {
    console.log('F');
  }

//Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
  /*
    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
  */

  /*
  let monthInput = String(prompt('enter month'));
  let month = monthInput.charAt(0).toUpperCase() + monthInput.slice(1).toLowerCase();
  if(month == 'September' || month == 'October' || month == 'November'){
    console.log('the season is Autumn');
  } else if(month == 'December' || month == 'January' || month == 'February'){
    console.log('the season is Winter');
  } else if(month == 'March' || month == 'April' || month == 'May') {
    console.log('the season is Spring');
  } else if(month == 'June' || month == 'July' || month == 'August'){
    console.log('the season is Summer');
  } else {
    console.log('you are at another planet');
  }
  */

//Check if a day is weekend day or a working day. Your script will take day as an input.
/*
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day.
*/

/*
let dayString = String(prompt('what is the day today ?'));
let today = dayString.charAt(0).toUpperCase() + dayString.slice(1).toLowerCase();
if(today =='Saturday' || today == 'Sunday'){
  alert(`${today} is a weekend`);
} else {
  alert(`${today} is a working day`);
}
*/

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------
//Write a program which tells the number of days in a month.
/*
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days.
*/

/*
const monthString = String(prompt('Enter a month'));
let month = monthString.charAt(0).toUpperCase() + monthString.slice(1).toLowerCase();
if(month == 'January' || month == 'March' || month == 'May' || month == 'July' || month == 'August' || month == 'October' || month == 'December'){
  alert(`${month} has 31 days`);
} else if (month == 'February'){
  alert(`${month} has 28 days`);
} else {
  alert(`${month} has 30 days`);
}
*/

//Write a program which tells the number of days in a month, now consider leap year.
let year = Number(prompt('enter year'));
if(year % 4 == 0){
  alert(`${year} has 366 days`);
} else{
  alert(`${year} has 365 days`);
}

// ------------------------------ End Exercises: Level 3 ------------------------------