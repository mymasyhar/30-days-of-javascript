// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Create an empty object called dog
console.log(`Create an empty object called dog`);
let dog = {};
console.log(`the dog was not born\n`);

// 2. Print the the dog object on the console
console.log(`Print the the dog object on the console`);
console.log(dog, `\n`);

// 3. Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof
console.log(
  `Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof`
);
dog.name = "kopet";
dog.legs = 4;
dog.color = "brown";
dog.age = 2;
dog.bark = "woof woof";
console.log(dog, `\n`);

// 4. Get name, legs, color, age and bark value from the dog object
console.log(`Get name, legs, color, age and bark value from the dog object`);
console.log(`the dog name : ${dog.name}`);
console.log(`dog legs : ${dog.legs}`);
console.log(`dog color : ${dog.color}`);
console.log(`dog age : ${dog.age}`);
console.log(`dog bark : ${dog.bark}`, `\n`);

// 5. Set new properties the dog object: breed, getDogInfo
console.log(`Set new properties the dog object: breed, getDogInfo`);
dog.breed = ["malamute", "siberian husky"];
dog.getDogInfo = function () {
  return `this dog name is ${this.name} and the color is ${this.color}. this dog are breeding from ${this.breed[0]} and ${this.breed[1]}`;
};
console.log(dog.getDogInfo(), `\n`);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

const users = {
  Alex: {
    email: "alex@alex.com",
    skills: ["HTML", "CSS", "JavaScript"],
    age: 20,
    isLoggedIn: false,
    points: 30,
  },
  Asab: {
    email: "asab@asab.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "Redux",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 25,
    isLoggedIn: false,
    points: 50,
  },
  Brook: {
    email: "daniel@daniel.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux"],
    age: 30,
    isLoggedIn: true,
    points: 50,
  },
  Daniel: {
    email: "daniel@alex.com",
    skills: ["HTML", "CSS", "JavaScript", "Python"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  John: {
    email: "john@john.com",
    skills: ["HTML", "CSS", "JavaScript", "React", "Redux", "Node.js"],
    age: 20,
    isLoggedIn: true,
    points: 50,
  },
  Thomas: {
    email: "thomas@thomas.com",
    skills: ["HTML", "CSS", "JavaScript", "React"],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
  Paul: {
    email: "paul@paul.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
    ],
    age: 20,
    isLoggedIn: false,
    points: 40,
  },
};

//1. Find the person who has many skills in the users object.
console.log(`Find the person who has many skills in the users object.`);
function getName() {
  //const personInGeneral = Object.entries(users).map(user => user[1].skills);
  const person = Object.keys(users).reduce((a, b) =>
    users[a].skills.length > users[b].skills.length ? a : b
  );
  const skillsPerPerson = Object.entries(users)
    .map((person) => person[1].skills)
    .reduce((person, currentPerson) =>
      person < currentPerson ? currentPerson : person
    );
  //let skillsPerPerson = Object.entries(users).reduce((currentPerson, nextPerson) => currentPerson[1] < nextPerson[1] ? nextPerson : currentPerson);
  return {
    user: person,
    skills: skillsPerPerson,
  };
}
console.log(getName(), `\n`);

// 2. Count logged in users, count users having greater than equal to 50 points from the following object.
console.log(
  `Count logged in users, count users having greater than equal to 50 points from the following object.`
);
function getUsersScore() {
  const scores = Object.values(users).filter((user) => user["points"] >= 50);
  return scores;
}
console.log(getUsersScore(), `\n`);

// 3. Find people who are MERN stack developer from the users object
console.log(`Find people who are MERN stack developer from the users object`);
function findMERN() {
  const userMERN = Object.values(users).filter((user) =>
    user.skills.includes("MongoDB", "Express", "React", "Node")
  );
  return userMERN;
}
console.log(findMERN(), `\n`);

// 4. Set your name in the users object without modifying the original users object
const masyhar = {
  Masyhar: {
    email: "masyhar@masyhar.com",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "MongoDB",
      "Express",
      "React",
      "Node",
      "MySQL",
      "Redis",
      "Redux",
    ],
    age: 24,
    isLoggedIn: true,
    points: 100,
  },
};
console.log(Object.assign(users, masyhar), `\n`);

// 5. Get all keys or properties of users object
console.log(`Get all keys or properties of users object`);
function getKeysAndProperties() {
  const result = Object.entries(users).map((user) => Object.keys(user[1]))[0];
  return result;
}
console.log(getKeysAndProperties(), `\n`);

// 6. Get all the values of users object
console.log(`Get all the values of users object`);
function getAllValues() {
  const values = Object.entries(users)
    .filter((user) => Object.keys(user[0]))
    .map((user) => Object.values(user[1]));
  return values;
}
console.log(getAllValues(), `\n`);

// 7. Use the countries object to print a country name, capital, populations and languages. (at script countries_data.js)

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
console.log(
  `Create an object literal called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.`
);
const personAccount = {
  firstName: "Masyhar",
  lastName: "Muharam",
  incomes: [
    {
      amount: 150000,
      description: "monthly salary",
    },
    {
      amount: 50000,
      description: "side hustle",
    },
    {
      amount: 20000,
      description: "monthly bonus",
    },
  ],
  expenses: [
    {
      amount: 5000,
      description: "rent",
    },
    {
      amount: 3000,
      description: "daily needs",
    },
  ],
  totalIncome: function () {
    const totalIncome = Object.entries(personAccount.incomes).map(
      (person) => person[1].amount
    );
    let sumIncome = 0;
    for (const income of totalIncome) {
      sumIncome += income;
    }
    return sumIncome;
  },

  totalExpense: function () {
    const totalExpense = Object.entries(personAccount.expenses).map(
      (expense) => expense[1].amount
    );
    let sumExpense = 0;
    for (const expense of totalExpense) {
      sumExpense += expense;
    }
    return sumExpense;
  },

  accountInfo: function () {
    return `hi ${
      this.firstName
    }, \n here's your total incomes and expenses:\n incomes : $${this.totalIncome()} \n expenses : $${this.totalExpense()}`;
  },

  addIncome: function (amount, description = "") {
    this.incomes.push({ amount, description });
  },

  addExpense: function (amount, description = "") {
    this.expenses.push({ amount, description });
  },

  accountBalance: function () {
    return `your account balance : $${
      this.totalIncome() - this.totalExpense()
    }`;
  },
};
personAccount.addIncome(10000, "business");
console.log(`your total incomes is : ${personAccount.totalIncome()}`);
personAccount.addExpense(2000, "monthly sports activity");
console.log(`your total expense is : ${personAccount.totalExpense()}`);
console.log(personAccount.accountInfo());
console.log(personAccount.accountBalance(), `\n`);

// 2. **** Questions:2, 3 and 4 are based on the following two arrays:users and products ()

const users2 = [
  {
    _id: "ab12ex",
    username: "Alex",
    email: "alex@alex.com",
    password: "123123",
    createdAt: "08/01/2020 9:00 AM",
    isLoggedIn: false,
  },
  {
    _id: "fg12cy",
    username: "Asab",
    email: "asab@asab.com",
    password: "123456",
    createdAt: "08/01/2020 9:30 AM",
    isLoggedIn: true,
  },
  {
    _id: "zwf8md",
    username: "Brook",
    email: "brook@brook.com",
    password: "123111",
    createdAt: "08/01/2020 9:45 AM",
    isLoggedIn: true,
  },
  {
    _id: "eefamr",
    username: "Martha",
    email: "martha@martha.com",
    password: "123222",
    createdAt: "08/01/2020 9:50 AM",
    isLoggedIn: false,
  },
  {
    _id: "ghderc",
    username: "Thomas",
    email: "thomas@thomas.com",
    password: "123333",
    createdAt: "08/01/2020 10:00 AM",
    isLoggedIn: false,
  },
];

const products = [
  {
    _id: "eedfcf",
    name: "mobile phone",
    description: "Huawei Honor",
    price: 200,
    ratings: [
      { userId: "fg12cy", rate: 5 },
      { userId: "zwf8md", rate: 4.5 },
    ],
    likes: [],
  },
  {
    _id: "aegfal",
    name: "Laptop",
    description: "MacPro: System Darwin",
    price: 2500,
    ratings: [],
    likes: ["fg12cy"],
  },
  {
    _id: "hedfcg",
    name: "TV",
    description: "Smart TV:Procaster",
    price: 400,
    ratings: [{ userId: "fg12cy", rate: 5 }],
    likes: ["fg12cy"],
  },
];

// Imagine you are getting the above users collection from a MongoDB database.
// a. Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
function signUp(username, email, password) {
  const charsToUsed = "1234567890abcdefghijklmnopqrstuvwxyz";
  const existsUser = Object.entries(users2).map((user) => user[1].username);
  let id = "";
  const generateId = function () {
    for (let i = 0; i < 6; i++) {
      id += charsToUsed.charAt(Math.floor(Math.random() * charsToUsed.length));
    }
    return id;
  };
  const createdDate = () => {
    const time = new Date();
    const hours =
      time.getHours() < 10 ? `0${time.getHours()}` : time.getHours();
    const minutes =
      time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes();
    return `${time.getDate()}/${
      time.getUTCMonth() + 1
    }/${time.getFullYear()} ${hours}:${minutes}`;
  };
  const user = {
    id: generateId(),
    username: username,
    email: email,
    password: password,
    createdAt: createdDate(),
    isLoggedIn: false,
  };
  if (existsUser.includes(user.username)) {
    return `username exist`;
  } else {
    users2.push(user);
  }
  return users2;
}
//console.log(signUp('Masyhar', 'masyhar@msyhr.com', '123456'));

// b. Create a function called signIn which allows user to sign in to the application
function signIn(email, password) {
  const selectedUser = users2.filter((user) => user.email == email);
  if (selectedUser[0].email == email && selectedUser[0].password == password) {
    return `Hi, ${selectedUser[0].username}, welcome!`;
  } else {
    return `Wrong Password`;
  }
}
console.log(signIn("asab@asab.com", "1234567"), `\n`);

// 3. The products array has three elements and each of them has six properties.
// a. Create a function called rateProduct which rates the product
  function rateProduct(productId, userId, rate) {
    const personalRating = {
      userId: userId,
      rate: rate,
    };

    const selectedProduct = products.filter(product => product._id == productId);
    if(selectedProduct.length > 0){
      selectedProduct[0].ratings.push(personalRating);
      console.log(selectedProduct[0].ratings);
      return selectedProduct;
    }else{
      return `product not found`;
    };
  }
 // console.log(rateProduct('aegfal', 'ab12ex', 5), `\n`);

// b. Create a function called averageRating which calculate the average rating of a product
  function averageRating(){
    const productRating = products.map(product => ({
      name: product.name,
      ratings: product.ratings.map(product => product.rate).length == 0 ? 0 : (product.ratings.map(rate => rate.rate).reduce((a,b) => a + b, 0)) / product.ratings.map(product => product.rate).length
    }));
    return productRating;
  }
  console.log(averageRating(), `\n`);

// 4. Create a function called likeProduct. This function will helps to like to the product if it is not liked and remove like if it was liked.
  function likeProduct(productId, userId){
    const getSpecificProduct = products.filter(product => product._id == productId);
    const usersLike = userId;
    if(getSpecificProduct.length > 0){
      let likeList = getSpecificProduct[0].likes;
      if(likeList.includes(userId)){
        likeList = likeList.splice(likeList['userId'], 1);
        return getSpecificProduct;
      }else{
        getSpecificProduct[0].likes.push(usersLike);
        return getSpecificProduct;
      }
    }else{
      return `product not found`;
    }
  }
  console.log(likeProduct('aegfal', 'al12ex'));
  console.log(likeProduct('aegfal', 'fg12cy'), `\n`);

// ------------------------------ End Exercises: Level 3 ------------------------------