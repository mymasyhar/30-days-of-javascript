// ------------------------------ Exercises: Level 1 ------------------------------


// 1. Explain the difference between forEach, map, filter, and reduce.
console.log(`Explain the difference between forEach, map, filter, and reduce.`);
console.log(`forEach are using to iterate an array`, `\n`);
console.log(`map are using to iterate, modify and return the new array`, `\n`);
console.log(
  `filter are using to iterate and then find the element that meets the condition based in array elements and return new array`,
  `\n`
);
console.log(
  `reduce takes a callback function. the callback functions takes accumulator, current, and optional as initial values`,
  `\n`
);

// 2. Define a callback function before you use it in forEach, map, filter or reduce.
console.log(
  `Define a callback function before you use it in forEach, map, filter or reduce.`
);
const number = [1, 8, 9, 0, 7, 10, 26];
const mapVariable = [
  {
    firstName: "Masyhar",
    lastName: "Muharam",
  },
];
console.log(`forEach using :`);
const forEachUseExample = number.forEach((num) => console.log(num, `\n`));
console.log(`map using :`);
const mapExample = mapVariable.map((name) => name.firstName);
console.log(mapExample, `\n`);
console.log(`filter using :`);
const filterExample = number.filter((num) => num < 10);
console.log(filterExample, `\n`);
console.log(`reduce using :`);
let sum1 = number.reduce((current, iterator) => current + iterator, 0);
console.log(sum1, `\n`);

//these variables are using for challenges below:
const countries = ["Finland", "Sweden", "Denmark", "Norway", "IceLand"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 3. Use forEach to console.log each country in the countries array.
console.log(`Use forEach to console.log each country in the countries array.`);
countries.forEach((country) => console.log(country));
console.log(`\n`);

// 4. Use forEach to console.log each name in the names array.
console.log(`Use forEach to console.log each name in the names array.`);
names.forEach((name) => console.log(name));
console.log(`\n`);

// 5. Use forEach to console.log each number in the numbers array.
console.log(`Use forEach to console.log each number in the numbers array.`);
numbers.forEach((number) => console.log(number));
console.log(`\n`);

// 6. Use map to create a new array by changing each country to uppercase in the countries array.
console.log(
  `Use map to create a new array by changing each country to uppercase in the countries array.`
);
const countriesWithUpperCase = countries.map((country) =>
  country.toUpperCase()
);
console.log(countriesWithUpperCase);
console.log(`\n`);

// 7. Use map to create an array of countries length from countries array.
console.log(
  `Use map to create an array of countries length from countries array.`
);
const countriesLength = countries.map((country) => country.length);
console.log(countriesLength);
console.log(`\n`);

// 8. Use map to create a new array by changing each number to square in the numbers array
console.log(
  `Use map to create a new array by changing each number to square in the numbers array`
);
const squareNumArray = numbers.map((number) => number ** 2);
console.log(squareNumArray, `\n`);

// 9. Use map to change to each name to uppercase in the names array
console.log(`Use map to change to each name to uppercase in the names array`);
const nameInUpper = names.map((name) => name.toUpperCase());
console.log(nameInUpper, `\n`);

// 10. Use map to map the products array to its corresponding prices.
console.log(`Use map to map the products array to its corresponding prices.`);
const productPrices = products.map((product) => product.price);
const realPrices = [];
for (let i = 0; i < productPrices.length; i++) {
  if (productPrices[i] == false) {
    productPrices[i] = 0;
  }
  realPrices.push(productPrices[i]);
}
console.log(realPrices, `\n`);

// 11. Use filter to filter out countries containing land.
console.log(`Use filter to filter out countries containing land.`);
console.log(
  countries.filter((country) => country.includes("land")),
  `\n`
);

// 12. Use filter to filter out countries having six character.
console.log(`Use filter to filter out countries having six character.`);
console.log(
  countries.filter((country) => country.length == 6),
  `\n`
);

// 13. Use filter to filter out countries containing six letters and more in the country array.
console.log(
  `Use filter to filter out countries containing six letters and more in the country array.`
);
console.log(
  countries.filter((country) => country.length >= 6),
  `\n`
);

// 14. Use filter to filter out country start with 'E';
console.log(`Use filter to filter out country start with 'E'`);
console.log(
  countries.filter((country) => country.startsWith("E")),
  `\n`
);

// 15. Use filter to filter out only prices with values.
console.log(`Use filter to filter out only prices with values.`);
console.log(
  products
    .filter((product) => product.price > -1)
    .map((product) => ({
      price: product.price == false || product.price == "" ? 0 : product.price,
    })),
  `\n`
);

// 16. Declare a function called getStringLists which takes an array as a parameter and then returns an array only with string items.
function getStringLists(array) {
  const result = array.filter((arr) => typeof arr === "string");
  return result;
}
console.log(getStringLists(["a", "b", "c", 1, "d"]), `\n`);

// 17. Use reduce to sum all the numbers in the numbers array.
console.log(`Use reduce to sum all the numbers in the numbers array.`);
const sum = numbers.reduce((current, iterator) => current + iterator, 0);
console.log(sum);

// 18. Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries
console.log(
  `Use reduce to concatenate all the countries and to produce this sentence: Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries`
);
const sentence = countries.reduce((acc, country, index) => {
  if (index === countries.length - 2) {
    return `${acc}${country} and `;
  } else if (index === countries.length - 1) {
    return `${acc}${country} are north European countries`;
  } else {
    return `${acc}${country}, `;
  }
}, "");
console.log(sentence, `\n`);

// 19. Explain the difference between some and every
console.log(`Explain the difference between some and every`, `\n`);
console.log(
  `some are used to check if some of the elements in an array are similar`,
  `\n`
);
console.log(`every are used to check if all of the elements are similar`, `\n`);

// 20. Use some to check if some names' length greater than seven in names array
console.log(
  `Use some to check if some names' length greater than seven in names array`
);
const someResult = names.some((name) => name.length > 7);
console.log(someResult, `\n`); //--> true

// 21. Use every to check if all the countries contain the word land
console.log(`Use every to check if all the countries contain the word land`);
const everyResult = countries.every((country) => country.includes("land"));
console.log(everyResult, `\n`); //--> false

// 22. Explain the difference between find and findIndex.
console.log(`Explain the difference between find and findIndex.`);
console.log(
  `find are using to return the first element in array that satisfied the condition`,
  `\n`
);
console.log(
  `findIndex are using to return the position of first element index that satisfied the condition`,
  `\n`
);

// 23. Use find to find the first country containing only six letters in the countries array
console.log(
  `Use find to find the first country containing only six letters in the countries array`
);
console.log(countries);
const firstCountry = countries.find((country) => country.length == 6);
console.log(firstCountry, `\n`);

// 24. Use findIndex to find the position of the first country containing only six letters in the countries array
console.log(
  `Use findIndex to find the position of the first country containing only six letters in the countries array`
);
const firstCountryIndex = countries.findIndex((country) => country.length == 6);
console.log(firstCountryIndex, `\n`); // --> 1

// 25. Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.
console.log(
  `Use findIndex to find the position of Norway if it doesn't exist in the array you will get -1.`
);
const findNorway = (countries) => countries == "Norway";
console.log(countries.findIndex(findNorway), `\n`);

// 26. Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.
console.log(
  `Use findIndex to find the position of Russia if it doesn't exist in the array you will get -1.`
);
// const findRussia = countries => countries == 'Russia';
const findRussia = countries.findIndex((country) => country == "Russia");
//console.log(countries.findIndex(findRussia));
console.log(findRussia);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))
console.log(
  `Find the total price of products by chaining two or more array iterators(eg. arr.map(callback).filter(callback).reduce(callback))`
);
const sumPrice = products
  .map((product) => (product.price == false ? 0 : product.price))
  .reduce((previousValue, currentValue) => previousValue + currentValue);
console.log(sumPrice, `\n`);

// 2. Find the sum of price of products using only reduce reduce(callback))
    const sumReduce = products.reduce((previousValue, currentValue) => {
        const price = Number(currentValue.price);
        if(!isNaN(price)){
            return previousValue + price;
        }else{
            return price;
        }
    }, 0)
    console.log(sumReduce, `\n`);

// 3. Declare a function called categorizeCountries which returns an array of countries which have some common pattern(you find the countries array in this repository as countries.js(eg 'land', 'ia', 'island','stan')).
// answer on countries.js script

// 4. Create a function which return an array of objects, which is the letter and the number of times the letter use to start with a name of a country.
// answer on countries.js script

// 5. Declare a getFirstTenCountries function and return an array of ten countries. Use different functional programming to work on the countries.js array
// answer on countries.js script

// 6. Declare a getLastTenCountries function which which returns the last ten countries in the countries array.
// answer on countries.js script

// 7. Find out which letter is used many times as initial for a country name from the countries array (eg. Finland, Fiji, France etc)
// answer on countries.js script

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Use the countries information, in the data folder. Sort countries by name, by capital, by population, ...
//answer in countries.js script

// 2. *** Find the 10 most spoken languages:
//answer in countries.js script

// 3. *** Use countries_data.js file create a function which create the ten most populated countries
//answer in countries.js script

// 4. *** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.
  console.log(`*** Try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create an object called statistics and create all the functions which do statistical calculations as method for the statistics object. Check the output below.`);
  const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
  const statistics = {
      count: function(){
          return `${ages.length}`;
      },
      sum: function(){
          const total = ages.reduce((a,b) => a + b, 0);
          return total;
      },
      min: function(){
          const minimum = ages.reduce((a,b) => b < a ? b : a);
          return minimum;
      },
      max: function(){
          const maximum = ages.reduce((a,b) => a > b ? a : b);
          return maximum;
      },
      range: function(){
          return this.max()-this.min();
      },
      mean: function(){
          const result = this.sum()/this.count();
          return Math.round(result);
      },
      median: function(){
          const orderedData = ages.sort((a,b) => a - b);
          if(orderedData.length % 2 == 0){
              const medianNumber = orderedData.splice(orderedData.length /2, 2);
              return medianNumber;
          }else{
              const medianNumber = orderedData.splice(orderedData.length / 2, 1);
              return medianNumber[0];
          }
      },
      mode: function(){
          const ageGroup = ages.reduce((group, age) => {
              if(group[age]){
                  group[age] +=1;
              }else{
                  group[age] = 1;
              }
              return group;
          },{});
          const result = Object.entries(ageGroup).sort((a,b) => b[1] - a[1])[0];
          return result;
      },
      variance: function(){
        const average = this.sum()/this.count();
        const variance = ages.reduce((acc, age) => acc + Math.pow((age - average), 2), 0);
        return (variance/ages.length-1);
      },
      std: function(){
        const standardDeviation = Math.sqrt(this.variance());
        return standardDeviation;
      },
      freqDist: function(){
        return ages.reduce((acc, age) => {
          acc[age] = acc[age] ? acc[age] +=1 : 1;
          return acc;
        }, {});
      }
  }
  console.log('count: ',statistics.count());
  console.log('sum: ',statistics.sum());
  console.log('min: ',statistics.min());
  console.log('max: ',statistics.max());
  console.log('range: ',statistics.range());
  console.log('mean: ',statistics.mean());
  console.log('median : ',statistics.median());
  console.log('mode : ',statistics.mode());
  console.log('var : ',statistics.variance());
  console.log('std : ',statistics.std());
  console.log('freqDist : ',statistics.freqDist());

// ------------------------------ End Exercises: Level 3 ------------------------------