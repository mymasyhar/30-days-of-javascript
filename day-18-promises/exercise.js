//import fetch from "node-fetch";
// ------------------------------ Exercises: Level 1 ------------------------------

const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'

// 1. Read the countries API using fetch and print the name of country, capital, languages, population and area.
    console.log(`Read the countries API using fetch and print the name of country, capital, languages, population and area.`);
    
    const getCountriesData = async () =>{
        try{
            const data = await fetch(countriesAPI);
            const response = await data.json();
            console.log(response.map(country => ({
                name: country.name,
                capital: country.capital,
                languages: country.languages,
                population: country.population,
                area: country.area
            })));
        }catch(error){
            console.error(error);
        }
    }
    //getCountriesData();
    
// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 2. Print out all the cat names in to catNames variable.
    console.log(`Print out all the cat names in to catNames variable.`);
    const catNames = async () => {
        try {
            const data = await fetch(catsAPI);
            const response = await data.json();
            console.log(response.map(cat => cat.name));    
        } catch (error) {
            console.error(error);
        }
    }
    //catNames();

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Read the cats api and find the average weight of cat in metric unit.
    console.log(`Read the cats api and find the average weight of cat in metric unit.`);
    const getAverage = async () => {
        try {
            const response = await fetch(catsAPI);
            const data = await response.json();
            const result = data.map(cat => ({
                name: cat.name,
                weight: cat.weight.metric.split(' - ', 6).reduce((a,b) => (Number(a) + Number(b))/2)
            }));
            console.log(result);
        } catch (err) {
            console.error(err);
        }
    }
    getAverage();

// ------------------------------ End Exercises: Level 3 ------------------------------