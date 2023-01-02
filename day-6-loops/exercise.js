// ------------------------------ Exercises: Level 1 ------------------------------

// Iterate 0 to 10 using for loop, do the same using while and do while loop
  console.log(`Iterate 0 to 10 using for loop, do the same using while and do while loop`);

  // i. for loop
    console.log(`i. for loop`);
    for (let i = 0; i < 11; i++) {
      console.info(i);
    }
    console.log(`\n`);

  // ii. while loop
    console.log(`while loop`);
    let count = 0;
    while(count < 11){
      console.log(count);
      count +=1;
    }
    console.log(`\n`);

  // iii. do while loop
    console.log(`do while loop`);
    let startCountDoWhile = 0;
    do{
      console.log(startCountDoWhile);
      startCountDoWhile++;
    } while(startCountDoWhile < 11);
    console.log(`\n\n`);


// Iterate 10 to 0 using for loop, do the same using while and do while loop
  console.log(`Iterate 10 to 0 using for loop, do the same using while and do while loop`);

    // i. for loop
    console.log(`for loop`);
    for(let i = 10; i >= 0; i--){
      console.log(i);
    }
    console.log(`\n`);

    // ii. while loop
    console.log(`while loop`);
    let countdownWhileLoop = 10;
    while(countdownWhileLoop >= 0){
      console.log(countdownWhileLoop);
      countdownWhileLoop--;
    }
    console.log(`\n`);

    // iii. do while loop
    console.log(`do while loop`);
    let countdownDoWhileLoop = 10;
    do {
      console.log(countdownDoWhileLoop);
      countdownDoWhileLoop--;
    } while (countdownDoWhileLoop >= 0);
    console.log(`\n`);

// Iterate 0 to n using for loop
  console.log(`Iterate 0 to n using for loop`);
  let n = 100;
  for(let i=0; i<=n; i++){
    console.log(i);
  }
  console.log(`\n`);


// Write a loop that makes the following pattern using console.log():
  console.log(`Write a loop that makes the following pattern using console.log():`);
  /*
    #
    ##
    ###
    ####
    #####
    ######
    #######
  */
  let pyramidPattern = '';
  for(let i=1; i<=7; i++){
    pyramidPattern += '#';
    console.log(pyramidPattern);
  }
  console.log(`\n`);
  
//Use loop to print the following pattern:
  /*
    0 x 0 = 0
    1 x 1 = 1
    2 x 2 = 4
    3 x 3 = 9
    4 x 4 = 16
    5 x 5 = 25
    6 x 6 = 36
    7 x 7 = 49
    8 x 8 = 64
    9 x 9 = 81
    10 x 10 = 100
  */
  console.log(`Use loop to print the following pattern:`);
  for(let i = 0; i < 11; i++){
    console.log(`${i} x ${i} = ${i * i}`);
  }
  console.log(`\n`);

//Using loop print the following pattern
  /*
  i    i^2   i^3
  0    0     0
  1    1     1
  2    4     8
  3    9     27
  4    16    64
  5    25    125
  6    36    216
  7    49    343
  8    64    512
  9    81    729
  10   100   1000
  */

  console.log(`Using loop print the following pattern`);
  console.log(`i \t i^2 \t i^3 \n`);
  for(let i = 0; i < 11; i++){
    console.log(`${i} \t ${i ** 2} \t ${i ** 3}`);
  }
  console.log(`\n`);

//Use for loop to iterate from 0 to 100 and print only even numbers
  console.log(`Use for loop to iterate from 0 to 100 and print only even numbers`);
  for(let i = 0; i < 101; i+=2){
    console.log(i);
  }
  console.log(`\n`);

//Use for loop to iterate from 0 to 100 and print only odd numbers
  console.log(`Use for loop to iterate from 0 to 100 and print only odd numbers`);
  for(let i = 1; i < 101; i+=2){
    console.log(i);
  }
  console.log(`\n`);

//Use for loop to iterate from 0 to 100 and print only prime numbers
  console.log(`Use for loop to iterate from 0 to 100 and print only prime numbers`);
  let isPrimary;
  for(let i=2; i<=100; i++){
    isPrimary = 1;
    for(let j=2; j<i; j++){
      if(i%j === 0){
        isPrimary = 0;
        break;
      }
    }
    if(isPrimary === 1){
      console.log(i);
    }
  }
  console.log(`\n`);

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.
  console.log(`Use for loop to iterate from 0 to 100 and print the sum of all numbers.`);
  let sum = 0;
  for(let i = 0; i <= 100; i++){
    sum += i;
  }
  console.log(sum);
  console.log(`\n`);

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
  console.log(`Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.`);
  let sumOddNumbers = 0;
  let sumEvenNumbers = 0;
  for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
      sumEvenNumbers += i;
    } else {
      sumOddNumbers += i;
    }
  }
  console.log(`The sum of all evens from 0 to 100 is ${sumEvenNumbers}. And the sum of all odds from 0 to 100 is ${sumOddNumbers}. \n`)

//Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
  console.log(`Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array`);
  let newArrayOfSum = [];
  newArrayOfSum.push(sumEvenNumbers, sumOddNumbers);
  console.log(newArrayOfSum);
  console.log(`\n`);

//Develop a small script which generate array of 5 random numbers
  console.log(`Develop a small script which generate array of 5 random numbers \n`);
  let arrayOfRandomNumbers = [];
  for(let i = 0; i < 5; i++){
    let randomNumber = Math.floor(Math.random()*100);
    arrayOfRandomNumbers.push(randomNumber);
  }
  console.log(arrayOfRandomNumbers, `\n`);


//Develop a small script which generate array of 5 random numbers and the numbers must be unique
  console.log(`Develop a small script which generate array of 5 random numbers and the numbers must be unique`);
  arrayOfRandomNumbers = [];
  while(arrayOfRandomNumbers.length < 5){
    let randomNumber = Math.floor(Math.random()*10) + 1;
    if(arrayOfRandomNumbers.indexOf(randomNumber) === -1){
      arrayOfRandomNumbers.push(randomNumber);
    }
  }
  console.log(arrayOfRandomNumbers, `\n`);

//Develop a small script which generate a six characters random id:
  console.log(`Develop a small script which generate a six characters random id:`);
  let resultId = '';
  let charactersToUsed = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let charactersToUsedLength = charactersToUsed.length
  for(let i =0; i <6; i++){
    resultId += charactersToUsed.charAt(Math.floor(Math.random() * charactersToUsedLength));
  }
  console.log(resultId, `\n`);

//------------------------------ End Exercises: Level 1 ------------------------------

//------------------------------ Exercises: Level 2 ------------------------------

//Develop a small script which generate any number of characters random id:
  console.log(`Develop a small script which generate any number of characters random id:`);
  const lengthId = Math.floor(Math.random() * 50);
  let resultWithLengthId = '';
  for(let i = 0; i < lengthId; i++){
    resultWithLengthId += charactersToUsed.charAt(Math.floor(Math.random() * charactersToUsedLength))
  };
  console.log(lengthId, resultWithLengthId, `\n`);

//Write a script which generates a random hexadecimal number.
  console.log(`Write a script which generates a random hexadecimal number.`);
  const hexadecimalElement = '123456ABCDEF';
  let randomHexaNumber = '#';
  for(let i=0; i<6; i++){
    randomHexaNumber += hexadecimalElement.charAt(Math.floor(Math.random() * hexadecimalElement.length));
  }
  console.log(randomHexaNumber, `\n`);

//Write a script which generates a random rgb color number.
  console.log(`Write a script which generates a random rgb color number.`);
  let rgbElement = [];
  for(let i=0; i<3; i++){
    const element = Math.floor(Math.random() * 255);
    rgbElement.push(element);
  }
  rgbElement.toLocaleString();

  console.log(`rgb(${rgbElement.toLocaleString()})`, `\n`);


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

//Using the above countries array, create the following new array.

//["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
  console.log(`Using the above countries array, create the following new array.`);
  let newCountriesArray = [];
  for(let i=0; i<=countries.length-1; i++){
    let newCountry = countries[i].toUpperCase();
    newCountriesArray.push(newCountry);
  }
  console.log(newCountriesArray.sort(), `\n`);

//Using the above countries array, create an array for countries length'.
  console.log(`Using the above countries array, create an array for countries length'.`);
  let sortedCountries = newCountriesArray.sort();
  let lengthPerCountry = [];
  for(let i=0; i <sortedCountries.length; i++){
    let countryLength = sortedCountries[i].length;
    lengthPerCountry.push(countryLength);
  }
  console.log(lengthPerCountry, `\n`);

//Use the countries array to create the following array of arrays: example : [[ALBANIA, "ALB", 7], ...];
  console.log(`Use the countries array to create the following array of arrays:`);
  let countriesWithInitialAndLength =[];
  for(let i=0; i < newCountriesArray.length; i++){
    let countryName = countries[i];
    let countryInitial = countries[i].slice(0,3).toLocaleUpperCase();
    let lengthCountry = countries[i].length;

    countriesWithInitialAndLength.push([countryName, countryInitial, lengthCountry]);
  }
  console.log(countriesWithInitialAndLength, `\n`);

//In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
  console.log(`In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.`);
  let specificCountries_land = [];
  for(let i=0; i<countries.length; i++){
    if(countries[i].includes('land')){
      specificCountries_land.push(countries[i]);
    }
  };
  if(specificCountries_land.length >0){
    console.log(specificCountries_land, `\n`);
  } else {
    console.log('All these countries are without land', `\n`);
  }

//Using the above countries array, find the country containing only 5 characters.
  console.log(`Using the above countries array, find the country containing only 5 characters.`);
  let countriesFiveChars = [];
  for(let i=0; i <countries.length; i++){
    if(countries[i].length === 5){
      countriesFiveChars.push(countries[i]);
    }
  }
  console.log(countriesFiveChars, `\n`);


const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
]

//Find the longest word in the webTechs array
  console.log(`Find the longest word in the webTechs array`);
  let charsLength = '';
  for(let i=0; i<webTechs.length; i++){
    if(webTechs[i].length > charsLength.length){
      charsLength = webTechs[i];
    }
  }
  console.log(charsLength, `\n`);

//Use the webTechs array to create the following array of arrays: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]
  console.log(`Use the webTechs array to create the following array of arrays: [["HTML", 4], ["CSS", 3],["JavaScript", 10],["React", 5],["Redux", 5],["Node", 4],["MongoDB", 7]]`);
  let newArray = [];
  for(let i=0; i<webTechs.length; i++){
    newArray.push([webTechs[i], webTechs[i].length]);
  }
  console.log(newArray, `\n`);

const mernStack = ['MongoDB', 'Express', 'React', 'Node']

//An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack
  console.log(`An application created using MongoDB, Express, React and Node is called a MERN stack app. Create the acronym MERN by using the array mernStack`);
  let acronym = '';
  for(let i =0; i <mernStack.length; i++){
    acronym += mernStack[i].substring(0, 1);
  }
  console.log(acronym, `\n`);

//Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.
  console.log(`Iterate through the array, ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"] using a for loop or for of loop and print out the items.`);
  //i. for loop
  console.log(`for loop:`)
  for(let i=0; i<webTechs.length; i++){
    console.log(webTechs[i]);
  }
  console.log(`\n`);
  
  //ii. for of loop
  console.log(`for of loop:`)
  for (const stack of webTechs) {
    console.log(stack);
  }
  console.log(`\n`);

//This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.
  console.log(`This is a fruit array , ['banana', 'orange', 'mango', 'lemon'] reverse the order using loop without using a reverse method.`);
  let fruit = ['banana', 'orange', 'mango', 'lemon'];
  let result = [];
  while(fruit.length){
    result.push(fruit.pop());
  }
  console.log(result, `\n`);

const fullStack = [
  ['HTML', 'CSS', 'JS', 'React'],
  ['Node', 'Express', 'MongoDB']
];
//Print all the elements of array as shown below.
  let newStack = [];
  for(let i=0; i<fullStack.length; i++){
    for(let j=0; j<fullStack[i].length; j++){
      newStack.push(fullStack[i][j]);
    }
  }
  console.log(newStack.join('\n'));

//------------------------------ End Exercises: Level 2 ------------------------------

//------------------------------ Exercises: Level 3 ------------------------------

//Copy countries array(Avoid mutation)
  console.log(`Copy countries array(Avoid mutation)`);
  let countriesArrayNew = [...countries];
  console.log(countries)
  console.log(countriesArrayNew, `\n`);

//Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries
  console.log(`Arrays are mutable. Create a copy of array which does not modify the original. Sort the copied array and store in a variable sortedCountries`)
  let copyFromOriginal = [...countriesArrayNew];
  let sortedCountries_ = copyFromOriginal.sort();
  console.log(copyFromOriginal, sortedCountries_, `\n`);

//Sort the webTechs array and mernStack array
  console.log(`Sort the webTechs array and mernStack array`);
  let sortedWebTechs = webTechs.sort();
  let sortedMERN = mernStack.sort();
  console.log(sortedWebTechs, sortedMERN, `\n`);


  const countries_ = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
  ]

//Extract all the countries contain the word 'land' from the countries array and print it as array
  console.log(`Extract all the countries contain the word 'land' from the countries array and print it as array`);
  const countriesContainLand = [];
  for(let i=0; i<countries_.length; i++){
    if(countries_[i].includes('land')){
      countriesContainLand.push(countries_[i]);
    }
  }
  console.log(countriesContainLand, `\n`);

//Find the country containing the hightest number of characters in the countries array
  console.log(`Find the country containing the hightest number of characters in the countries array`);
  let highestCharacterNumber = '';
  for(let i=0; i<countries_.length; i++){
    if(countries_[i].length > highestCharacterNumber.length){
      highestCharacterNumber = countries_[i];
    }
  }
  console.log(highestCharacterNumber, `\n`);

//Extract all the countries contain the word 'land' from the countries array and print it as array
  console.log(`Extract all the countries contain the word 'land' from the countries array and print it as array`);
  let countriesLand = [];
  for(let i=0; i<countries_.length; i++){
    if(countries_[i].includes('land')){
      countriesLand.push(countries_[i]);
    }
  }
  console.log(countriesLand, `\n`);

//Extract all the countries containing only four characters from the countries array and print it as array
  console.log(`Extract all the countries containing only four characters from the countries array and print it as array`);
  let countriesFourCharacter = [];
  for(let i=0; i<countries_.length; i++){
    if(countries_[i].length === 4){
      countriesFourCharacter.push(countries_[i]);
    }
  }
  console.log(countriesFourCharacter, `\n`);

//Extract all the countries containing two or more words from the countries array and print it as array
  console.log(`Extract all the countries containing two or more words from the countries array and print it as array`);
  let countryMoreThanTwoWords = [];
  for(let i=0; i<countries_.length; i++){
    if(countries_[i].includes(' ')){
      countryMoreThanTwoWords.push(countries_[i]);
    }
  }
  console.log(countryMoreThanTwoWords, `\n`);

//Reverse the countries array and capitalize each country and stored it as an array
  let reversedCountries = countries_.map((countries) => {
    return countries.toUpperCase();
  });
  console.log(reversedCountries.reverse());
  
//------------------------------ End Exercises: Level 3 ------------------------------