// ------------------------------ Exercises: Level 1 ------------------------------

const constants = [2.72, 3.14, 9.81, 37, 100];
const countries = ["Finland", "Estonia", "Sweden", "Denmark", "Norway"];
const rectangle = {
    width: 20,
    height: 10,
    area: 200,
    perimeter: 60,
    };
    const users = [
    {
        name: "Brook",
        scores: 75,
        skills: ["HTM", "CSS", "JS"],
        age: 16,
    },
    {
        name: "Alex",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "David",
        scores: 75,
        skills: ["HTM", "CSS"],
        age: 22,
    },
    {
        name: "John",
        scores: 85,
        skills: ["HTML"],
        age: 25,
    },
    {
        name: "Sara",
        scores: 95,
        skills: ["HTM", "CSS", "JS"],
        age: 26,
    },
    {
        name: "Martha",
        scores: 80,
        skills: ["HTM", "CSS", "JS"],
        age: 18,
    },
    {
        name: "Thomas",
        scores: 90,
        skills: ["HTM", "CSS", "JS"],
        age: 20,
    },
];

// 1. Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.
    console.log(`Destructure and assign the elements of constants array to e, pi, gravity, humanBodyTemp, waterBoilingTemp.`);
    const [e, pi, gravity, humanBodyTemp, waterBoilingTemp] = constants;
    console.log("e : ", e);
    console.log("pi : ", pi);
    console.log("gravity : ", gravity);
    console.log("humanBodyTemp : ", humanBodyTemp);
    console.log("waterBoilingTemp : ", waterBoilingTemp);
    console.log(`\n`);

// 2. Destructure and assign the elements of countries array to fin, est, sw, den, nor
    console.log(`Destructure and assign the elements of countries array to fin, est, sw, den, nor`);
    const [fin, est, sw, den, nor] = countries;
    console.log("fin : ", fin);
    console.log("est : ", est);
    console.log("sw : ", sw);
    console.log("den : ", den);
    console.log("nor : ", nor);
    console.log(`\n`);

// 3. Destructure the rectangle object by its properties or keys.
    console.log(`Destructure the rectangle object by its properties or keys.`);
    const { width, height } = rectangle;
    console.log(width);
    console.log(height);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Iterate through the users array and get all the keys of the object using destructuring
    console.log(`Iterate through the users array and get all the keys of the object using destructuring`);
    for (const { name, scores, skills, age } of users) {
        console.log(`name: ${name}\nscores:${scores}\nskills: ${skills.join(",")}\nage: ${age}\n`);
    }
    console.log(`\n`);

// 2. Find the persons who have less than two skills
    console.log(`Find the persons who have less than two skills`);
    const findPerson = users.filter(({ skills: [...s] }) => s.length < 2);
    console.log(findPerson, `\n`);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Destructure the countries object print name, capital, population and languages of all countries
    console.log(`Destructure the countries object print name, capital, population and languages of all countries. (answer in countries_data.js script) \n`);

// 2. A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.
    console.log(
    `A junior developer structure student name, skills and score in array of arrays which may not easy to read. Destructure the following array name to name, skills array to skills, scores array to scores, JavaScript score to jsScore and React score to reactScore variable in one line.`
    );
    /*
    const student = ["David", ["HTM", "CSS", "JS", "React"], [98, 85, 90, 95]];
    const [name, skills, [, , jsScore, reactScore]] = student;
    console.log(name, skills, jsScore, reactScore, `\n`);
    */

//3. Write a function called convertArrayToObject which can convert the array to a structure object.
/*
    console.log(`Write a function called convertArrayToObject which can convert the array to a structure object.`);
    const students = [
        ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
        ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
    ];
    function convertObjectToArray(student){
        for(let[name,skills,scores] of students){
            console.log({name,skills,scores});
        }
    }
    console.log(convertObjectToArray(students), `\n`);
*/
    console.log(`\n`);

// 4. Copy the student object to newStudent without mutating the original object. In the new object add the following ?
    console.log(`Copy the student object to newStudent without mutating the original object. In the new object add the following ? \n`);

    const student = {
        name: "David",
        age: 25,
        skills: {
            frontEnd: [
            { skill: "HTML", level: 10 },
            { skill: "CSS", level: 8 },
            { skill: "JS", level: 8 },
            { skill: "React", level: 9 },
            ],
            backEnd: [
            { skill: "Node", level: 7 },
            { skill: "GraphQL", level: 8 },
            ],
            dataBase: [{ skill: "MongoDB", level: 7.5 }],
            dataScience: ["Python", "R", "D3.js"],
        },
    };

    // i. Add Bootstrap with level 8 to the front end skill sets
    console.log(`Add Bootstrap with level 8 to the front end skill sets`);
    let newStudent = {...student, ...student.skills.frontEnd.push({skill: 'Bootstrap', level: 8})};
    console.log(newStudent, `\n`);

    // ii. Add Express with level 9 to the back end skill sets
    console.log(`ii. Add Express with level 9 to the back end skill sets`);
    newStudent = {...student, ...student.skills.backEnd.push({skill: 'Express', level: 9})};
    console.log(newStudent, `\n`);

    // iii. Add SQL with level 8 to the data base skill sets
    console.log(`Add SQL with level 8 to the data base skill sets`);
    newStudent = {...student, ...student.skills.dataBase.push({skill: 'SQL', level: 8})};
    console.log(newStudent, `\n`);

    // iv. Add SQL without level to the data science skill sets
    console.log(`Add SQL without level to the data science skill sets`);
    newStudent = {...student, ...student.skills.dataScience.push('SQL')};
    console.log(newStudent, `\n`);

// ------------------------------ End Exercises: Level 3 ------------------------------