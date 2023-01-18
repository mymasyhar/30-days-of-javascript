// ------------------------------ Exercises: Level 1 ------------------------------
const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

// 1. create an empty set
    console.log(`create an empty set`);
    const newEmptySet = new Set();
    console.log(newEmptySet, `\n`);

// 2. Create a set containing 0 to 10 using loop
    console.log(`Create a set containing 0 to 10 using loop`);
    for(let i=0; i<=10; i++){
        newEmptySet.add(i);
    }
    console.log(newEmptySet, `\n`);

// 3. Remove an element from a set
    console.log(`Remove an element from a set`);
    newEmptySet.delete(0);
    console.log(newEmptySet, `\n`);

// 4. Clear a set
    console.log(`Clear a set`);
    newEmptySet.clear();
    console.log(newEmptySet, `\n`);

// 5. Create a set of 5 string elements from array
    console.log(`Create a set of 5 string elements from array`);
    const arrayToAdd = ['Facebook','Amazon','Apple','Netflix','Google'];
    const newSetFromArray = new Set(arrayToAdd);
    console.log(newSetFromArray, `\n`);

// 6. Create a map of countries and number of characters of a country
    console.log(`Create a map of countries and number of characters of a country`);
    const newCountryMaps = new Map();
    for(const country of countries){
        newCountryMaps.set(country, country.length);
    }
    console.log(newCountryMaps);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Find a union b
    console.log(`Find a union b`);
    const unionC = Array.from((new Set([...a, ...b]))).sort((a,b) => a-b);
    console.log(unionC, `\n`);

// 2. Find a intersection b
    console.log(`Find a intersection b`);
    const setA = new Set(a);
    const setB = new Set(b);
    const intersectAB = a.filter(num => setB.has(num));
    const resultIntersectAB = Array.from(new Set([...intersectAB]));
    console.log(resultIntersectAB, `\n`);

// 3. Find a with b
    console.log(`Find a with b`);
    const aWithB = [...a, ...b].sort((a,b) => a-b);
    console.log(...new Set(aWithB),`\n`);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. How many languages are there in the countries object file.
    console.log(`How many languages are there in the countries object file. (answer in countrie_data.js script)`, `\n`);

// 2. *** Use the countries data to find the 10 most spoken languages:
    console.log(`*** Use the countries data to find the 10 most spoken languages: (answer in countrie_data.js script)`, `\n`);