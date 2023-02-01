// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Create a closure which has one inner function
    console.log(`Create a closure which has one inner function`);
    function outerFunction(){
        let count = 0;
        function innerFunction(){
            count++;
            return count;
        }
        return innerFunction
    }
    const innerFunc = outerFunction();
    console.log(innerFunc());
    console.log(innerFunc());
    console.log(innerFunc());
    console.log(innerFunc(), `\n`);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Create a closure which has three inner functions
    console.log(`Create a closure which has three inner functions`);
    function outerClosure(start){
        let count = start;
        function getCounter(){
            return count;
        }
        function increment(){
            count += 1;
        }
        function decrement(){
            count -= 1;
        }
        return{
            get: getCounter,
            inc: increment,
            dec: decrement,
        }
    }
    let counter = outerClosure(10);
    console.log(counter.get());
    counter.inc();
    counter.inc();
    counter.inc();
    counter.dec();
    console.log(counter.get());
    
// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.
    console.log(`Create a personAccount out function. It has firstname, lastname, incomes, expenses inner variables. It has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance inner functions. Incomes is a set of incomes and its description and expenses is also a set of expenses and its description.\n`);
    function personAccount(firstName, lastName){
        let incomes = [];
        let expenses = [];
        function accountInfo(){
            return `Hi ${firstName} ${lastName}!, here's your account info:\nincomes: ${totalIncome()}\nexpenses: ${totalExpense()}\naccount balance: ${accountBalance()}\n`;
        }
        function totalIncome(){
            return incomes.map(income => income.amount).reduce((a,b) => a + b, 0);
        }
        function addIncome(amount, description){
            incomes.push({amount, description});
        }
        function totalExpense(){
            return expenses.map(expense => expense.amount).reduce((a,b) => a + b, 0);
        }
        function addExpense(amount, description){
            expenses.push({amount, description});
        }
        function accountBalance(){
            const balance = totalIncome()-totalExpense();
            return balance;
        }
        return {
            accountInfo: accountInfo,
            totalIncome: totalIncome,
            addIncome: addIncome,
            totalExpense: totalExpense,
            addExpense: addExpense,
            accountBalance: accountBalance
        }
    }
    const masyhar = personAccount('Masyhar','Muharam');
    console.log(masyhar.accountInfo());
    masyhar.addIncome(2000, 'salary');
    console.log(masyhar.accountInfo());
    masyhar.addExpense(300, 'daily needs');
    masyhar.addExpense(500, 'Holiday');
    console.log(masyhar.accountInfo());

// ------------------------------ End Exercises: Level 3 ------------------------------