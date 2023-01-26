// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Create an Animal class. The class will have name, age, color, legs properties and create different methods
    console.log(`Create an Animal class. The class will have name, age, color, legs properties and create different methods`);
    class Animal {
        constructor(name, age, color, legs){
            this.name = name;
            this.age = age;
            this.color = color;
            this.legs = legs;
        }
        getInfo(){
            return `hi, my name is ${this.name}, i'm ${this.age} years old, my color is ${this.color} and having ${this.legs} legs`;
        }
    }
    const doggie = new Animal('doggo', 2, 'abu-abu magrib', 4);
    console.log(doggie.getInfo());
    console.log(`\n`);

// 2. Create a Dog and Cat child class from the Animal Class.
    console.log(`Create a Dog and Cat child class from the Animal Class.`);
    class Dog extends Animal {
        constructor(name, age, color, legs, breed){
            super(name, age, color, legs);
            this.breed = breed;
        }
        woof(){
            return `hi, i',m ${this.name}. i can 'woof woof!'`;
        }
    }
    class Cat extends Animal {
        constructor(name, age, color, legs, breed){
            super(name, age, color, legs);
            this.breed = breed;
        }
        meow(){
            return `hi, i'm ${this.name}. i can 'meow meow'`;
        }
    }
    console.log(`\n`);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Override the method you create in Animal class
    console.log(`Override the method you create in Animal class`);
    class Husky extends Dog {
        constructor(name, age, color, legs, breed, gender){
            super(name,age,color,legs,breed);
            this.gender = gender;
        }
        getInfo(){
            return `${this.name} is a ${this.gender} ${this.breed}. he is ${this.age} years old and having color ${this.color}`;
        }
    }
    const siber = new Husky('siber', 2, 'Dark Grey', 4, 'siberian husky', 'male');
    console.log(siber.getInfo(), `\n`);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.
    console.log(`Let's try to develop a program which calculate measure of central tendency of a sample(mean, median, mode) and measure of variability(range, variance, standard deviation). In addition to those measures find the min, max, count, percentile, and frequency distribution of the sample. You can create a class called Statistics and create all the functions which do statistical calculations as method for the Statistics class. Check the output below.`);
    class Statistics {
        count(){
            return `Count: ${ages.length}`;
        }
        sum(){
            return `Sum: ${ages.reduce((prev, next) => prev + next, 0)}`;
        }
        min(){
            return `Min: ${ages.sort((prev, next) => prev - next)[0]}`
        }
        max(){
            return `Max: ${ages.sort((prev, next) => prev - next)[ages.length-1]}`
        }
        range(){
            const result = ages.reduce((accumulator, currentValue) => {
                if(currentValue < accumulator.min) accumulator.min = currentValue;
                if(currentValue > accumulator.max) accumulator.max = currentValue;
                return accumulator;
            }, {min: Infinity, max: -Infinity});
            return `Range: ${result.max - result.min}`;
        }
        mean(){
            const sortedData = ages.sort((a,b) => a + b).reduce((previousValue, currentValue) => previousValue + currentValue, 0);
            const meanResult = sortedData/ages.length;
            if(meanResult.toPrecision(2) > .5){
                return `Mean: ${Math.ceil(meanResult)}`
            }else{
                return `Mean: ${Math.floor(meanResult)}`;
            }
        }
        median(){
            const sortedData = ages.sort((a,b) => a+b);
            if(sortedData.length % 2 == 0){
                const result = sortedData.slice(sortedData.length/2, sortedData.length/2 + 2);
                return `Median: ${result}`;
            }else{
                const result = sortedData.slice(sortedData.length/2, sortedData.length/2 + 1);
                return `Median: ${result}`;;
            }
        }
        mode(){
            const sortedData = ages.sort((a,b) => a + b);
            const ageGroup = {};
            for(let i=0; i<sortedData.length; i++){
                if(ageGroup[sortedData[i]] == undefined){
                    ageGroup[sortedData[i]] = 1;
                }else{
                    ageGroup[sortedData[i]] += 1;
                }
            }
            const result = Object.entries(ageGroup).sort((a,b) => b[1] - a[1])[0];
            return `Mode: : (${result})`;
        }
        variance(){
            const sumOfData = ages.reduce((a,b) => a + b, 0) / ages.length;
            const sumSquareDiffs = ages.map(num => (num-sumOfData) ** 2).reduce((a,b) => a + b);
            return `Variance: ${(sumSquareDiffs/ages.length).toFixed(2)}`;
        }
        std(){
            const mean = ages.reduce((a,b) => a + b, 0)/ages.length;
            const sumSquareDiffs = ages.map(num => (num-mean) ** 2).reduce((a,b) => a + b);
            const result = Math.sqrt(sumSquareDiffs/ages.length);
            return `Standard Devation: ${result.toFixed(2)}`;
        }
        freqDist(){
            let frequencyDistribution = {};
            for(let i=0; i<ages.length; i++){
                let num = ages[i];
                if(frequencyDistribution[num] == undefined){
                    frequencyDistribution[num] = 1;
                }else{
                    frequencyDistribution[num] += 1;
                }
            }
            let relativeFrequencyDistribution = {};
            const total = ages.length;
            for(let number in frequencyDistribution){
                let relativeFrequency = frequencyDistribution[number] / total;
                relativeFrequencyDistribution[number] = relativeFrequency;
            }
            const result = Object.entries(relativeFrequencyDistribution).sort((a,b) => b[1] - a[1]).map(num => ({freq: (num[1]*100).toFixed(1), value: num[0]}));
            return result;
        }
    }
    const ages = [31, 26, 34, 37, 27, 26, 32, 32, 26, 27, 27, 24, 32, 33, 27, 25, 26, 38, 37, 31, 34, 24, 33, 29, 26];
    const statistics = new Statistics();
    console.log(`\n`);
    console.log(statistics.count());
    console.log(statistics.sum());
    console.log(statistics.min());
    console.log(statistics.max());
    console.log(statistics.range());
    console.log(statistics.mean());
    console.log(statistics.median());
    console.log(statistics.mode());
    console.log(statistics.variance());
    console.log(statistics.std());
    console.log(statistics.freqDist(), `\n`);

// 2. Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
    console.log(`Create a class called PersonAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.`);
    class PersonAccount {
        constructor(firstName, lastName){
            this.firstName = firstName;
            this.lastName = lastName;
            this.incomes = new Set();
            this.expenses = new Set();
        }
        get accountInfo(){
            const fullName = `Hi, ${this.firstName} ${this.lastName}`;
            return fullName;
        }
        addIncome(income){
            this.incomes.add(income)
        }
        addExpense(expense){
            this.expenses.add(expense);
        }
        get getAllIncome(){
            return this.incomes;
        }
        get getAllExpenses(){
            return this.expenses;
        }
        get totalIncome(){
            let totalIncomes = 0;
            for(const income of this.incomes){
                totalIncomes += income.amount;
            }
            return totalIncomes;
        }
        get totalExpense(){
            let totalExpenses = 0;
            for(const expense of this.expenses){
                totalExpenses += expense.amount;
            }
            return totalExpenses;
        }
        get accountBalance(){
            return `your account balance: ${this.totalIncome - this.totalExpense}`;
        }
    }
    const masyhar = new PersonAccount('Masyhar', 'Muharam');
    console.log(masyhar.accountInfo);
    masyhar.addIncome({amount: 2300, description: 'Side Job'});
    masyhar.addIncome({amount: 3500, description: 'Salary'});
    console.log(masyhar.getAllIncome);
    masyhar.addExpense({amount: 1000, description: 'Daily Needs'});
    console.log(masyhar.getAllExpenses);
    console.log(masyhar.totalIncome);
    console.log(masyhar.totalExpense);
    console.log(masyhar.accountBalance);

// ------------------------------ End Exercises: Level 3 ------------------------------