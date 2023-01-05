// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Declare a function fullName and it print out your full name.
  console.log(`Declare a function fullName and it print out your full name.`);
  function fullName_(){
    console.log(`Masyhar M.`);
  }
  fullName_();
  console.log(`\n`);

// 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.
  console.log(`Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.`);
  function fullName(firstName, lastName){
    let fullName = `${firstName} ${lastName}`;
    return fullName;
  }
  console.log(fullName('Masyhar', 'M'), `\n`);

// 3. Declare a function addNumbers and it takes two two parameters and it returns sum.
  console.log(`Declare a function addNumbers and it takes two two parameters and it returns sum.`);
  function addNumbers(numberOne, numberTwo){
    let sum = numberOne + numberTwo;
    return sum;
  }
  console.log(addNumbers(10, 20), `\n`);

// 4. An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.
  console.log(`An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.`);
  function areaOfRectangle(length, width){
    let area = length * width;
    return area;
  }
  console.log(areaOfRectangle(10, 30), `\n`);

// 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.
  console.log(`A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.`);
  function perimeterOfRectangle(length, width){
    let perimeter = 2 * (length + width);
    return perimeter;
  }
  console.log(perimeterOfRectangle(10, 5), `\n`);

// 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.
  console.log(`A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.`);
  function volumeOfRectPrism(length, width, height){
    let volume = length * width * height;
    return volume;
  }
  console.log(volumeOfRectPrism(10,10,10), `\n`);

// 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle
  console.log(`Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle`);
  function areaOfCircle(r){
    let area = Math.PI * r * r;
    return area;
  }
  console.log(areaOfCircle(10), `\n`);

// 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle
  console.log(`Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle`);
  function circumOfCircle(r){
    let circumference = 2 * Math.PI * r;
    return circumference;
  }
  console.log(circumOfCircle(3), `\n`);

// 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.
  console.log(`Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.`);
  function densityOfSubstance(mass, volume){
    let density = mass / volume;
    return density;
  }
  console.log(densityOfSubstance(10, 5), `\n`);

// 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.
  console.log(`Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.`);
  function speedOfMovingObject(distance, time){
    let speed = distance / time;
    return speed;
  }
  console.log(speedOfMovingObject(100, 10), `\n`);

// 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.
  console.log(`Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.`);
  function calculateWeight(mass){
    let gravity = 9.8;
    let weight = mass/gravity;
    return weight;
  }
  console.log(calculateWeight(98), `\n`);

// 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.
  console.log(`Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.`);
  function convertCelsiusToFahrenheit(celciusTemperature){
    let fahrenheitTemperature = (celciusTemperature * 9/5) + 32;
    return fahrenheitTemperature;
  }
  console.log(convertCelsiusToFahrenheit(5), `\n`);

// 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.
  console.log(`Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older. Check if a person is underweight, normal, overweight or obese based the information given below.`);
  /*
    The same groups apply to both men and women.
    Underweight: BMI is less than 18.5
    Normal weight: BMI is 18.5 to 24.9
    Overweight: BMI is 25 to 29.9
    Obese: BMI is 30 or more
  */
  function bodyMassIndex(weight, height){
    const bmi = weight/(height*height);
    const precisionBMI = parseFloat(bmi.toFixed(1));
    if(precisionBMI < 18.5){
      return `your BMI is ${precisionBMI}, you are underweight`;
    } else if(precisionBMI > 18.5 && precisionBMI < 25){
      return `your BMI is ${precisionBMI}, you are Normal weight`;
    } else if(precisionBMI > 25 && precisionBMI < 30){
      return `your BMI is ${precisionBMI}, you are Overweight`;
    } else {
      return `your BMI is ${precisionBMI}, you are Obese`;
    }
  }
  console.log(bodyMassIndex(53, 1.71), `\n`);

// 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.
  console.log(`Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.`);
  function checkSeason(month){
    const correctMonth = String(month).charAt(0).toLocaleUpperCase() + String(month).slice(1).toLocaleLowerCase();
    let season ='';
    switch(correctMonth){
      case 'March':
      case 'April':
      case 'May':
        season = 'Spring';
        break;
      case 'June':
      case 'July':
      case 'August':
        season = 'Summer';
        break;
      case 'September':
      case 'October':
      case 'November':
        season = 'Autumn';
        break;
      case 'December':
      case 'January':
      case 'February':
        season = 'Winter';
        break;
      default:
        console.log(`you are not in the earth`);
    }
    return season;
  }
  console.log(checkSeason('May'), `\n`);

// 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.
  console.log(`Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.`);
  function findMax(arguments){
    let max = arguments[0];
    for(let i=0; i < arguments.length; i++){
      if(arguments[i] > max){
        max = arguments[i];
      }
    }
    return max;
  }
  console.log(findMax([10,100,3]), `\n`);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.
  console.log(`Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.`);
  function solveLinEquation(a, b){
    let gradient = -a/b;
    return gradient;
  }
  console.log(solveLinEquation(-4, 2), `\n`);

// 2. Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.
  console.log(`Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.`);
  function solveQuadEquation(a, b, c){

  }
  console.log(`\n`);

// 3. Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.
  console.log(`Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.`);
  function printArray(name){
    for(const specificName of name){
      console.log(specificName);
    }
  }
  printArray(["masyhar", "muharam"], `\n`);

// 4. Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.
  console.log(`Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object.`);
  function showDateTime(){
    const unformatedDate = new Date();
    const date = unformatedDate.getUTCDate();
    const month = unformatedDate.getMonth()+1;
    const year = unformatedDate.getUTCFullYear();
    const hour = unformatedDate.getHours();
    const minute = unformatedDate.getMinutes();
    return `${date}/${month}/${year} ${hour}:${minute}`;
  }
  console.log(showDateTime(), `\n`);

// 5. Declare a function name swapValues. This function swaps value of x to y.
  console.log(`Declare a function name swapValues. This function swaps value of x to y.`);
  const swapValues = (x, y) => {
    const a = y;
    const b = x;
    return `x :${a}, y: ${b}`;
  }
  console.log(swapValues(10, 20), `\n`);

// 6. Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).
  console.log(`Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).`);
  function reverseArray(arrayElement){
    let newArray = [];
    while(arrayElement.length){
      newArray.push(arrayElement.pop());
    }
    return newArray;
  }
  console.log(reverseArray(['A', 'B', 'C']), `\n`);

// 7. Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.
  console.log(`Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray.`);
  function capitalizeArray(arrayElement){
    let newArray = [];
    for(let i=0; i<arrayElement.length; i++){
      newArray.push(arrayElement[i].toLocaleUpperCase());
    }
    return newArray;
  }
  console.log(capitalizeArray(['a','b','c']), `\n`);

// 8. Declare a function name addItem. It takes an item parameter and it returns an array after adding the item
  console.log(`Declare a function name addItem. It takes an item parameter and it returns an array after adding the item`);
  function addItem(item, addedItem){
    return item.concat(addedItem);
  }
  console.log(addItem([1,2,3,4,5],[6,7,8,9,]));

// 9. Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item
  console.log(`Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item`);
  function removeItem(removedItem){
    const arrayElement = [1,2,3,4,5,6,7,8,9,10];
    const index = arrayElement.indexOf(removedItem);
    if(index > -1){
      arrayElement.splice(index, 1);
      return arrayElement;
    } else {
      console.log(`the element to removed is not available`);
      return arrayElement;
    }
  }
  console.log(removeItem(11), `\n`);

// 10. Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
  console.log(`Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.`);
  function sumOfNumbers(numbers){
    let sum =0;
    for (const number of numbers) {
      sum += number;
    }
    return sum;
  }
  console.log(sumOfNumbers([1,2,3,4,5,6]), `\n`);

// 11. Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.
  console.log(`Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.`);
  function sumOfOdds(numbers){
    let sum = 0;
    for (const number of numbers) {
      if(number % 2 != 0){
        sum += number;
      }
    }
    return sum;
  }
  console.log(sumOfOdds([1,2,3,4,5]), `\n`);

// 12. Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.
  console.log(`Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.`);
  function sumOfEven(numbers){
    let sum = 0;
    for (const number of numbers) {
      if(number % 2 == 0){
        sum += number;
      }
    }
    return sum;
  }
  console.log(sumOfEven([1,2,3,4,5,6]), `\n`);

// 13. Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.
  console.log(`Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.`);
  function evensAndOdds(number){
    let evenNumbers =[];
    let oddNumbers =[];
    while(number >= 0){
      if(number %2 == 0){
        evenNumbers.push(number);
        number--;
      } else{
        oddNumbers.push(number);
        number--;
      }
    }
    return `the number of odds are ${oddNumbers.length}\nthe number of evens are ${evenNumbers.length} \n`;
  }
  console.log(evensAndOdds(100));

// 14. Write a function which takes any number of arguments and return the sum of the arguments
  console.log(`Write a function which takes any number of arguments and return the sum of the arguments`);
  function sum(){
    let sumOfArguments = 0;
    for(let i=0; i<arguments.length; i++){
      sumOfArguments += arguments[i];
    }
    return sumOfArguments;
  }
  console.log(sum(1,2,3,4,5), `\n`);

// 15. Write a function which generates a randomUserIp.
  console.log(`Write a function which generates a randomUserIp.`);
  function randomUserIp(){
    let ip = [];
    for(let i=0; i<4; i++){
      let randomIpNumber = Math.floor(Math.random() * 255);
      ip.push(randomIpNumber);
    }
    return ip.join('.');
  }
  console.log(randomUserIp(), `\n`);

// 16. Write a function which generates a randomMacAddress
  console.log(`Write a function which generates a randomMacAddress`);
  function randomMacAddress(){
    const characterMAC = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let macAddress = [];
    for(let i=0 ; i<6; i++){
      let smallMAC ='';
      for(let j=0; j<2; j++){
        //macAddress.push(characterMAC.charAt(Math.floor(Math.random() * characterMAC.length)));
        smallMAC += (characterMAC.charAt(Math.floor(Math.random() * characterMAC.length)));
      }
      macAddress.push(smallMAC);
    }
    return macAddress.join('-');
  }
  console.log(randomMacAddress(), `\n`);

// 17. Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.
  console.log(`Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number.`);
  function randomHexaNumberGenerator(){
    let hexaNumber = '#';
    const hexadecimalComponent = '123456789ABCDEF';
    for(let i=0; i<6; i++){
      hexaNumber += hexadecimalComponent.charAt(Math.floor(Math.random() * hexadecimalComponent.length));
    }
    return hexaNumber;
  }
  console.log(randomHexaNumberGenerator(), `\n`);

// 18. Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.
  console.log(`Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.`);
  function userIdGenerator(){
    let id = '';
    for(let i=0; i<7; i++){
      const characterToUsed = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      id += characterToUsed.charAt(Math.floor(Math.random() * characterToUsed.length));
    }
    return id;
  }
  console.log(userIdGenerator(), `\n`);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.
  console.log(`Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.\n`);
  function userIdGeneratedByUser(){
    const numberOfCharacters = Number(prompt('enter length of character :'));
    const numberOfCreatedID = Number(prompt(`how many id's you want to create`));
    let id =``;
    for(let i=0; i<numberOfCreatedID; i++){
      const characterToUsed = '1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      for(let j=0; j<numberOfCharacters; j++){
        id += characterToUsed.charAt(Math.floor(Math.random() * characterToUsed.length));
      }
      id += `\n`;
    }
    return id;
  }
  //console.log(userIdGeneratedByUser(), `\n`);

// 2. Write a function name rgbColorGenerator and it generates rgb colors.
  console.log(`Write a function name rgbColorGenerator and it generates rgb colors.`);
  function rgbColorGenerator(){
    const randomRGB = [];
    for(let i=0; i<3; i++){
      randomRGB.push(Math.floor(Math.random() * 255));
    }
    let randomColorRGB = `rgb(${randomRGB.toString()})`;
    return randomColorRGB;
  }
  console.log(rgbColorGenerator(), `\n`);

// 3. Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.
  console.log(`Write a function arrayOfHexaColors which return any number of hexadecimal colors in an array.`);
  function arrayOfHexaColors(){
    const numberOfHexa = Math.floor(Math.random() * 10);
    const hexadecimalColors = [];
    for(let i=0; i <numberOfHexa; i++){
      const hexaCharacter = '1234567890ABCDEF';
      let colors =`#`;
      for(let j=0; j<6; j++){
        colors += hexaCharacter.charAt(Math.floor(Math.random() * hexaCharacter.length));
      }
      hexadecimalColors.push(colors);
    }
    return hexadecimalColors;
  }
  console.log(arrayOfHexaColors(), `\n`);

// 4. Write a function arrayOfRgbColors which return any number of RGB colors in an array.
  console.log(`Write a function arrayOfRgbColors which return any number of RGB colors in an array.`);
  function arrayOfRgbColors(){
    const numberOfRGB = Math.floor(Math.random() * 20);
    const rgbColor = [];
    for(let i=0; i<numberOfRGB; i++){
      const rgbColorComponent =[];
      for(let j=0; j<3; j++){
        let rgbNumber = Math.floor(Math.random() * 255);
        rgbColorComponent.push(rgbNumber);
      }
      let rgb =  `rgb(${rgbColorComponent})`;
      rgbColor.push(rgb);
    }
    return rgbColor;
  }
  console.log(arrayOfRgbColors(), `\n`);

// 5. Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.
  console.log(`Write a function convertHexaToRgb which converts hexa color to rgb and it returns an rgb color.`);
  function convertHexaToRgb(){
    const charactersToUsed ='1234567890ABCDEF';
    let hexaColor = [];
    for(let i=0; i<6; i++){
      hexaColor.push(charactersToUsed.charAt(Math.floor(Math.random() * charactersToUsed.length)));
    }
    const red = hexaColor.splice(0,2).join('');
    const green = hexaColor.splice(0,2).join('');
    const blue = hexaColor.splice(0,2).join('');
    return `rgb(${parseInt(red,16)},${parseInt(green,16)},${parseInt(blue,16)})`;
  }
  console.log(convertHexaToRgb(), `\n`);

// 6. Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.
  console.log(`Write a function convertRgbToHexa which converts rgb to hexa color and it returns an hexa color.`);
  function convertRgbToHexa(){
    let red = (Math.floor(Math.random() * 255)).toString(16).padStart(2, '0').toUpperCase();
    let green = (Math.floor(Math.random() * 255)).toString(16).padStart(2, '0').toUpperCase();
    let blue = (Math.floor(Math.random() * 255)).toString(16).padStart(2, '0').toUpperCase();
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
  }
  console.log(convertRgbToHexa());

// 7. Write a function generateColors which can generate any number of hexa or rgb colors.
  console.log(`Write a function generateColors which can generate any number of hexa or rgb colors.`);
  function generateColors(colorType, numOfColors){
    const colorArray = [];
    if(colorType == 'hexa'){
      for(let i=0; i<numOfColors; i++){
        const red = (Math.floor(Math.random() * 255)).toString(16).padStart(2,'0');
        const green = (Math.floor(Math.random() * 255)).toString(16).padStart(2,'0');
        const blue = (Math.floor(Math.random() * 255)).toString(16).padStart(2, '0');
        let hexaColor =`#`;
        hexaColor+=`${red}${green}${blue}`;
        colorArray.push(hexaColor);
      }
    }else {
      for(let i=0; i<numOfColors; i++){
        const red = Math.floor(Math.random() * 255);
        const green = Math.floor(Math.random() * 255);
        const blue = Math.floor(Math.random() * 255);
        let rgbColor = `rgb(${red},${green},${blue})`;
        colorArray.push(rgbColor);
      }
    }
    return colorArray.length == 1 ? colorArray[0] : colorArray;
  }
  console.log(generateColors('hexa', 3), `\n`);

// 8. Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array
  console.log(`Call your function shuffleArray, it takes an array as a parameter and it returns a shuffled array`);
  function shuffleArray(array){
    const newArray = [];
    let currentIndex = array.length;
    let randomIndex;
    while(currentIndex != 0){
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  console.log(shuffleArray([1,2,3,4,5]), `\n`);

// 9. Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number
  console.log(`Call your function factorial, it takes a whole number as a parameter and it return a factorial of the number`);
  function factorial(number){
    let result = number;
    /*
    if(number < 0){
      return -1;
    } else if(number ==0){
      return 1;
    } else {
      return (number*factorial(number-1));
    }
    */
    while(number > 1){
      number--;
      result *= number;
    }
    return result;
  }
  console.log(factorial(3), `\n`);

// 10. Call your function isEmpty, it takes a parameter and it checks if it is empty or not
  console.log(`Call your function isEmpty, it takes a parameter and it checks if it is empty or not`);
  function isEmpty(params = undefined){
    if(params === undefined){
      return 'this is empty';
    } else {
      return `here is your parameter : ${params}, this is not empty`;
    }
  }
  console.log(isEmpty(), `\n`);

// 11. Call your function sum, it takes any number of arguments and it returns the sum.
  console.log(`Call your function sum, it takes any number of arguments and it returns the sum.`);
  function sum(){
    let result = 0;
    for(let i=0; i<arguments.length; i++){
      result += arguments[i];
    }
    return result;
  }
  console.log(sum(), `\n`);

// 12. Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.
  console.log(`Write a function called sumOfArrayItems, it takes an array parameter and return the sum of all the items. Check if all the array items are number types. If not give return reasonable feedback.`);
  function sumOfArrayItems(array){
    let isVerifiedArray;
    let sum = 0;
    const verifiedArray = [];
    for (const number of array) {
      if(typeof number != 'number'){
        isVerifiedArray = false;
        break;
      }else{
        verifiedArray.push(number);
        isVerifiedArray = true;
      }
    }
    if(isVerifiedArray){
      for (const element of verifiedArray) {
        sum += element;
      }
      return sum;
    } else {
      return `your array is not verified`;
    }
  }
  console.log(sumOfArrayItems([1,2,3,4,true]), `\n`);

// 13. Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.
  console.log(`Write a function called average, it takes an array parameter and returns the average of the items. Check if all the array items are number types. If not give return reasonable feedback.`);
  function average(array){
    let isVerified;
    const verifiedArray = [];
    for(let i=0; i<array.length; i++){
      if(typeof array[i] !== 'number'){
        isVerified = false;
        break;
      } else {
        verifiedArray.push(array[i]);
        isVerified = true;
      }
    }
    let sum =0;
    if(!isVerified){
      return `can't count average number. one of your array element is not number`;
    }else {
      for (const number of verifiedArray) {
        sum +=number;
      }
      const average = sum/verifiedArray.length;
      return average.toPrecision(2);
    }
  }
  console.log(average([1,2,3,4,5]), `\n`);

// 14. Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.
  console.log(`Write a function called modifyArray takes array as parameter and modifies the fifth item of the array and return the array. If the array length is less than five it return 'item not found'.`);
  function modifyArray(array){
    for(let i=0; i<array.length; i++){
      if(array.length < 5){
        return `not found`;
      }else{
        array[4] = String(array[4]).toUpperCase();
      }
      return array;
    }
  }
  console.log(modifyArray(['Avocado', 'Tomato', 'Potato','Mango', 'Lemon','Carrot']), `\n`);

// 15. Write a function called isPrime, which checks if a number is prime number.
  console.log(`Write a function called isPrime, which checks if a number is prime number.`);
  function isPrime(number){
    let isPrime = true;
    if(number == 1){
      return `1 is neither a prime nor composite number.`;
    }
    for(let i=2; i<number; i++){
      if(number % i == 0){
        isPrime = false;
        break;
      }
    }
    if(isPrime){
      return `${number} is a prime number`;
    } else {
      return `${number} is not a prime number`;
    }
  }
  console.log(isPrime(2), `\n`);

// 16. Write a functions which checks if all items are unique in the array.
  console.log(`Write a functions which checks if all items are unique in the array.`);
  function isUniqueElement(element){
    let isUnique = true;
    for(let i=0; i<element.length; i++){
      for(let j=i+1; j<element.length; j++){
        if(element[i] == element[j]){
          isUnique = false;
          break;
        }
      }
    }
    if(isUnique){
      return `this array are unique`;
    } else {
      return `this array are not unique`;
    }
  }
  console.log(isUniqueElement(['a','b','c','d','e']), `\n`);

// 17. Write a function which checks if all the items of the array are the same data type.
  console.log(`Write a function which checks if all the items of the array are the same data type.`);
  function isUniqueDataType(array){
    let isSameDataType = true;
    for(let i=0; i<array.length; i++){
      for(let j=0; j<array.length; j++){
        if(typeof array[i] !== typeof array[j]){
          isSameDataType = false;
          break;
        }
      }
    }
    if(isSameDataType){
      return `the data type of this array are same`;
    }else{
      return `the data type of this array are not same`;
    }
  }
  console.log(isUniqueDataType([1,2,3,4,5]), `\n`);

// 18. JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.
  console.log(`JavaScript variable name does not support special characters or symbols except $ or _. Write a function isValidVariable which check if a variable is valid or invalid variable.`);
  function isValidVariable(variable){
    const regexVerifier = `^([a-zA-Z_$][a-zA-Z\d_$]*)$`;
    if(String(variable[0]).match(regexVerifier)){
      return `the variable ${variable} are valid`;
    }else{
      return `the variable ${variable} are invalid`;
    }
  }
  console.log(isValidVariable('?masyhar'));

// 19. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.
  console.log(`Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique.`);
  function randomNumber(){
    const result = [];
    while(result.length < 7){
      let number = Math.floor(Math.random() * 9);
      if(result.indexOf(number) == -1){
        result.push(number);
      }
    }
    return result;
  }
  console.log(randomNumber(), `\n`);

// 20. Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array
  console.log(`Write a function called reverseCountries, it takes countries array and first it copy the array and returns the reverse of the original array`);
  function reverseCountries(){
    const countries = ['Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    ];
    console.log(countries);
    const reversedArray = [];
    while(countries.length > 0){
      reversedArray.push(countries.pop());
    }
    return reversedArray;
    
  }
  console.log(reverseCountries(), `\n`);

// ------------------------------ End Exercises: Level 3 ------------------------------