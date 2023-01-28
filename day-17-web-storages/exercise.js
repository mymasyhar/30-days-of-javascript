// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Store you first name, last name, age, country, city in your browser localStorage.
/*
    console.log(`Store you first name, last name, age, country, city in your browser localStorage.`);
    const firstName = localStorage.setItem('firstName', 'Masyhar');
    console.log(localStorage.getItem('firstName'));
    const lastName = localStorage.setItem('lastName', 'Muharam');
    const country = localStorage.setItem('country', 'Indonesia');
    const city = localStorage.setItem('city', 'Jakarta');
    const age = localStorage.setItem('age', 24);
    console.log(`\n`);
*/
// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 2. Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.
/*
    console.log(`Create a student object. The student object will have first name, last name, age, skills, country, enrolled keys and values for the keys. Store the student object in your browser localStorage.`);
    const student = {
        firstName: 'Masyhar',
        lastName: 'Muharam',
        age: 24,
        skills: ['HTML', 'CSS', 'JavaScript'],
        country: 'Indonesia',
    }
    const studentObject = JSON.stringify(student, undefined, 4);
    localStorage.setItem('student', studentObject);
    console.log(localStorage.getItem('student'));
*/
// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
    console.log(`Create an object called personAccount. It has firstname, lastname, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.`);
    const personAccount = {
        firstName: 'Masyhar',
        lastName: 'Muharam',
        incomes: [],
        expenses: [],
        addIncome({amount, description}){
            this.incomes.push({amount, description});
        },
        get totalIncome(){
            let total = this.incomes.map(inc => inc.amount).reduce((a,b) => a + b, 0);
            return total;
        },
        addExpense({amount, description}){
            this.expenses.push({amount, description});
        },
        get totalExpense(){
            return this.expenses.map(exp => exp.amount).reduce((a,b) => a + b, 0);
        },
        get accountInfo(){
            return `Hi, ${this.firstName} ${this.lastName}, here's your account info:\n${this.accountBalance}`;
        },
        get accountBalance(){
            return `your account balance: ${this.totalIncome - this.totalExpense}`;
        }
    };
    personAccount.addIncome({amount: 400,description: 'side job'});
    personAccount.addIncome({amount: 4000,description: 'salary'});
    personAccount.addExpense({amount: 200, description: 'daily needs'});
    personAccount.addExpense({amount: 800, description: 'daily needs'});
    console.log(`total income: `, personAccount.totalIncome);
    console.log(`total expense : `, personAccount.totalExpense);
    console.log(personAccount.accountBalance);
    console.log(personAccount.accountInfo);
    const userObject = localStorage.setItem('userObject', JSON.stringify(personAccount));
    console.log(userObject);

// ------------------------------ End Exercises: Level 3 ------------------------------