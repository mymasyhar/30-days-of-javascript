const challengesObject = {
    description: "Asabeneh Yetayeh challenges",
    challengeTitle: "Asabeneh Yetayeh challenges",
    challengeSubtitle: "30DaysOfJavaScript Challenge",
    challengeYear: 2020,
    keywords: [
        "HTML",
        "HTML5",
        "CSS",
        "CSS3",
        "JS",
        "JavaScript",
        "ES6",
        "Promise",
        "async await",
        "Database",
        "React",
        "React Hooks",
        "Context API",
        "React Router",
        "Web Storage",
        "localStorage",
        "sessionStorage",
        "Redux",
        "Node",
        "MongoDB",
        "SQL",
        "API",
        "DOM",
        "data science",
        "MERN",
        "Python",
        "Flask",
        "Statistics",
        "Linear Algebra",
        "Numpy",
        "Pandas",
        "Scipy",
        "Scikit-learn",
        "Visualization",
        "D3.js",
    ],
    author: {
        firstName: "Masyhar",
        lastName: "Muharam",
        titles: [
        ["🌱", "Educator"],
        ["💻", "Programmer"],
        ["🌐", "Developer"],
        ["🔥", "Motivator"],
        ["📔", "Content Creator"],
        ],
        qualifications: [
        "MSc. Computer Science Ongoing",
        "BSc. Information and Communication Eng.",
        "MSc. Food Technology",
        "BSc.Food Technology",
        ],
        socialLinks: [
        {
            social: "LinkedIn",
            url: "https://www.linkedin.com/in/asabeneh/",
            fontawesomeIcon: '<i class="fab fa-linkedin">',
        },
        {
            social: "Twitter",
            url: "https://twitter.com/Asabeneh",
            fontawesomeIcon: '<i class="fab fa-twitter-square"></i>',
        },
        {
            social: "Github",
            fontawesomeIcon: '<i class="fab fa-github-square"></i>',
            url: "https://github.com/Asabeneh",
        },
        {
            social: "DEV.to",
            fontawesomeIcon: "",
            url: "https://dev.to/asabeneh",
        },
        ],
        skills: [
        "Web Development",
        "Data Analysis",
        "Data Visualization",
        "Programming",
        "Databases",
        "Developing API",
        ],
        bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
    },
    challenges: [
        {
        name: "30 Days Of Python",
        topics: [
            "Python",
            "Flask",
            "Numpy",
            "Pandas",
            "Statistics",
            "API",
            "MongoDB",
        ],
        days: 30,
        status: "Done",
        questions: "Above 500",
        projects: "Two",
        interviewQns: "",
        githubUrl: "https://github.com/Asabeneh/30-Days-Of-Python",
        },
        {
        name: "30 Days Of JavaScript",
        topics: ["JavaScript", "ES6", "Promise", "async and await", "DOM"],
        days: 30,
        status: "Ongoing",
        questions: "Above 500",
        projects: "About 30",
        interviewQns: "",
        githubUrl: "https://github.com/Asabeneh/30DaysOfJavaScript",
        },
        {
        name: "30 Days Of HTML & CSS",
        topics: ["CSS", "Flex", "Grid", "CSS Animation"],
        days: 30,
        status: "Coming",
        questions: "Above 500",
        projects: "Two",
        interviewQns: "",
        githubUrl: "",
        },
        {
        name: "30 Days Of React",
        topics: [
            "React",
            "React Router",
            "Redux",
            "Context API",
            "React Hooks",
            "MERN",
        ],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        },
        {
        name: "30 Days Of ReactNative",
        topics: ["ReactNative", "Redux"],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "Two",
        interviewQns: "",
        githubUrl: "",
        },
        {
        name: "30 Days Of Fullstack",
        topics: ["React", "Redux", "MongoDB", "Node", "MERN"],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        },
        {
        name: "30 Days Of Data Analysis",
        topics: ["Python", "Numpy", "Pandas", "Statistics", "Visualization"],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        },
        {
        name: "30 Days Of Machine Learning",
        topics: [
            "Python",
            "Numpy",
            "Pandas",
            "Scikit-learn",
            "Scipy",
            "Linear Algebra",
            "Statistics",
            "Visualization",
        ],
        days: 30,
        status: "Coming",
        questions: "",
        projects: "",
        interviewQns: "",
        githubUrl: "",
        },
    ],
};

    const scriptElement = document.getElementsByTagName("script")[0];

    /*create header (challenge header, challenge title, date and time)*/
    function headerChallenge() {
    /*create header title and challenge title */
    const headerContainer = document.createElement("div");
    headerContainer.className = 'header-container';

    const headerTitle = document.createElement("h1");
    headerTitle.textContent = `${challengesObject.author.firstName} Challenge in `;
    headerTitle.style.textAlign = 'center';

    const yearChallenge = document.createElement("span");
    yearChallenge.textContent = "2023";

    const challengeTitle = document.createElement("h2");
    challengeTitle.textContent = `${challengesObject.challengeSubtitle}`;
    challengeTitle.style.textAlign = 'center';

    headerTitle.appendChild(yearChallenge);
    headerContainer.appendChild(headerTitle);
    headerContainer.appendChild(challengeTitle);

    scriptElement.parentNode.insertBefore(headerContainer, scriptElement);

    function changeYearColor() {
        const year = document.querySelector("span");
        let colorUsed = `#`;
        for (let i = 0; i < 6; i++) {
        const characterUsed = `1234567890ABDCEF`;
        colorUsed += characterUsed.charAt(
            Math.floor(Math.random() * characterUsed.length)
        );
        }
        year.style.color = colorUsed;
    }
    setInterval(changeYearColor, 1000);

    /*create header title and challenge title */

    /*create times  and dates challenge */
    const dateAndTimeElement = document.createElement("p");
    dateAndTimeElement.style.color = "white";

    function timesAndDates() {
        const dateAndTime = new Date();
        const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
        ];

        let month = dateAndTime.getMonth();
        let monthNow = monthNames[month];

        let dateNow = dateAndTime.getDate();
        let yearNow = dateAndTime.getFullYear();
        let hourNow =
        dateAndTime.getHours() < 10
            ? `0${dateAndTime.getHours()}`
            : dateAndTime.getHours();
        let minuteNow =
        dateAndTime.getMinutes() < 10
            ? `0${dateAndTime.getMinutes()}`
            : dateAndTime.getMinutes();
        let secondNow =
        dateAndTime.getSeconds() < 10
            ? `0${dateAndTime.getSeconds()}`
            : dateAndTime.getSeconds();

        dateAndTimeElement.textContent = `${monthNow} ${dateNow} ${yearNow} ${hourNow}:${minuteNow}:${secondNow}`;
    }
    headerContainer.appendChild(dateAndTimeElement);
    setInterval(timesAndDates, 1000);

    function changeYearBackground() {
        const characterUsed = `1234567890ABDCEF`;
        let colorUsed = `#`;
        for (let i = 0; i < 6; i++) {
        colorUsed += characterUsed.charAt(
            Math.floor(Math.random() * characterUsed.length)
        );
        }
        dateAndTimeElement.style.background = colorUsed;
        dateAndTimeElement.style.width = 'max-content';
        dateAndTimeElement.style.padding = "5px 10px";
        dateAndTimeElement.style.margin = '0 auto';
    }
    setInterval(changeYearBackground, 1000);
    headerContainer.style.margin = '0 30%';

    /*end create times  and dates challenge */
    }
    headerChallenge();

    /*end create header (challenge header, challenge title, date and time)*/

    /* create list of challenge and topics */
    function challengeList(){
        const challengeContainer = document.createElement('div');
        challengeContainer.className = 'challenge-container';
        challengeContainer.style.marginTop = '15px';
        
        const challengeData = challengesObject.challenges.map(chl => ({
            name: chl.name,
            title: chl.name.replace(/^\s*(\w+\s+){3}/, ''),
            topics: chl.topics,
            status: chl.status
        }));

        let specificChallenge; // for div (next will appendChild in challengeContainer)
        let challengeTitle;
        let challengeDetails;
        let challengeSummary;
        let challengeComponent;
        let challengeStatus;
        
        for(let i=0; i<challengeData.length; i++){
            /* create container for specific challenge */
            specificChallenge = document.createElement('div');
            specificChallenge.className = 'specific-challenge';
            /* end create container for specific challenge */
            
            /* create challenge title for each challenge */
            challengeTitle = document.createElement('p');
            challengeTitle.textContent = challengeData[i].name;
            specificChallenge.appendChild(challengeTitle);
            /* end create challenge title for each challenge */

            /* create challenge detail for each challenge with topics */
            challengeDetails = document.createElement('details');
            challengeSummary = document.createElement('summary');
            challengeSummary.textContent = challengeData[i].title;
            challengeDetails.appendChild(challengeSummary);
            for(let j=0; j<challengeData[i].topics.length; j++){
                challengeComponent = document.createElement('p');
                challengeComponent.textContent = challengeData[i].topics[j];
                challengeDetails.appendChild(challengeComponent);
            }
            /* end create challenge detail for each challenge with topics */

            /* create challenge status for every challenge */
            challengeStatus = document.createElement('p');
            challengeStatus.textContent = challengeData[i].status;
            /* end create challenge status for every challenge */

            /* add challenge topics, details, and status in specific challenge container */
            specificChallenge.appendChild(challengeDetails);
            specificChallenge.appendChild(challengeStatus);
            /* end add challenge topics, details, and status in specific challenge container */
            
            /* add every specific challenge to challenge container */
            challengeContainer.appendChild(specificChallenge);
            /* end add every specific challenge to challenge container */

            /* styling the container challenge */
            specificChallenge.style.marginTop = '10px';
            specificChallenge.style.display = 'flex';
            specificChallenge.style.justifyContent = 'space-between';
            specificChallenge.style.alignItems = 'center';
            specificChallenge.style.padding = '10px 30px';
            specificChallenge.style.maxWidth = '100%';
            specificChallenge.style.margin = '5px 15%';
            specificChallenge.style.borderRadius = '5px';
            if(challengeStatus.textContent == 'Done'){
                specificChallenge.style.background = '#1F8A70';
            }else if(challengeStatus.textContent == 'Ongoing'){
                specificChallenge.style.background = '#FCE22A';
            }else{
                specificChallenge.style.background = '#D61355';
            }
        }
        
        scriptElement.parentNode.insertBefore(challengeContainer, scriptElement);
        
    }
    challengeList();
    /* create list of challenge and topics */

    /* create author information parts */
    function authorInfo(){

    }