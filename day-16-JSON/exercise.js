// ------------------------------ Exercises: Level 1 ------------------------------

const skills = ["HTML", "CSS", "JS", "React", "Node", "Python"];
let age = 250;
let isMarried = true;
const student = {
    firstName: "Asabeneh",
    lastName: "Yetayehe",
    age: 250,
    isMarried: true,
    skills: ["HTML", "CSS", "JS", "React", "Node", "Python"],
};
const txt = `{
    "Alex": {
        "email": "alex@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 30
    },
    "Asab": {
        "email": "asab@asab.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Redux",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 25,
        "isLoggedIn": false,
        "points": 50
    },
    "Brook": {
        "email": "daniel@daniel.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux"
        ],
        "age": 30,
        "isLoggedIn": true,
        "points": 50
    },
    "Daniel": {
        "email": "daniel@alex.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "Python"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "John": {
        "email": "john@john.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Redux",
            "Node.js"
        ],
        "age": 20,
        "isLoggedIn": true,
        "points": 50
    },
    "Thomas": {
        "email": "thomas@thomas.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "React"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    },
    "Paul": {
        "email": "paul@paul.com",
        "skills": [
            "HTML",
            "CSS",
            "JavaScript",
            "MongoDB",
            "Express",
            "React",
            "Node"
        ],
        "age": 20,
        "isLoggedIn": false,
        "points": 40
    }
}`;

// 1. Change skills array to JSON using JSON.stringify()
    console.log(`Change skills array to JSON using JSON.stringify()`);
    const jsonSkillArray = JSON.stringify(skills, undefined, 4);
    console.log(jsonSkillArray, `\n`);

// 2. Stringify the age variable
    console.log(`Stringify the age variable`);
    const jsonAge = JSON.stringify({age: age},undefined, 2);
    console.log(jsonAge, `\n`);

// 3. Stringify the isMarried variable
    console.log(`Stringify the isMarried variable`);
    const jsonIsMarried = JSON.stringify({isMarried: isMarried}, undefined, 2);
    console.log(jsonIsMarried, `\n`);

// 4. Stringify the student object
    console.log(`Stringify the student object`);
    const jsonStudentObject = JSON.stringify(student, undefined, 2);
    console.log(jsonStudentObject, `\n`);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Stringify the students object with only firstName, lastName and skills properties
    console.log(`Stringify the students object with only firstName, lastName and skills properties`);
    const jsonSpecificStudent = JSON.stringify(student, ['firstName', 'lastName', 'skills'], 4);
    console.log(jsonSpecificStudent);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Parse the txt JSON to object.
    console.log(`Parse the txt JSON to object.`);
    const jsonTxtParse = JSON.parse(txt, undefined);
    console.log(jsonTxtParse, `\n`);

// 2. Find the user who has many skills from the variable stored in txt.
    console.log(`Find the user who has many skills from the variable stored in txt.`);
    const userObject = JSON.parse(txt, undefined);
    /*
    const usernames = Object.keys(userObject);
    let mostSkilledPerson = {name: '', skills:[]};
    for(let username of usernames){
        let user = userObject[username];
        if(user.skills.length > mostSkilledPerson.skills.length){
            mostSkilledPerson.skills = skills;
            mostSkilledPerson.name = user;
        }
    }
    */
    const user = Object.keys(userObject);
    let mostSkilled = {name: '', skills:[]};
    for(const user in userObject){
        const username = userObject[user];
        if(username.skills.length > mostSkilled.skills.length){
            mostSkilled.name = user;
            mostSkilled.skills = username.skills;
        }
    }
    console.log(mostSkilled);

// ------------------------------ End Exercises: Level 3 ------------------------------