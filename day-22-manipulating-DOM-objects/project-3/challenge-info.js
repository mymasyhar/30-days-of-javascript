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
        firstName: "Asabeneh",
        lastName: "Yetayeh",
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
    document.body.style.fontFamily = 'Montserrat';
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
    yearChallenge.style.fontSize = '50px';

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
            /* end styling the container challenge */
        }
        
        scriptElement.parentNode.insertBefore(challengeContainer, scriptElement);
        
    }
    challengeList();
    /* create list of challenge and topics */

    /* create author information parts */
    const authorInfoContainer = document.createElement('div');
    authorInfoContainer.className = 'author-info-container';
    function authorInfo(){
        const authorName = document.createElement('h1');
        authorName.textContent = `${challengesObject.author.firstName} ${challengesObject.author.lastName}`

        const authorBio = document.createElement('p');
        authorBio.textContent = challengesObject.author.bio;
        
        authorInfoContainer.appendChild(authorName);
        authorInfoContainer.appendChild(authorBio);

        authorInfoContainer.style.textAlign = 'center';
        authorInfoContainer.style.width = '80%';
        authorInfoContainer.style.margin = '0 auto';
        
        scriptElement.parentNode.insertBefore(authorInfoContainer, scriptElement);
    }
    authorInfo();
    /* end create author information parts */

    /* extras information part */
    const triviaInformationContainer = document.createElement('div');
    triviaInformationContainer.className = 'trivia-info-container';
    function triviaInfo(){
        const triviaTitlesInfo = challengesObject.author.titles.map(title => ({
            titleIcon: title[0],
            titleName: title[1]
        }));
        const triviaSkillsInfo = challengesObject.author.skills.map(skill => ({
            skillIcon: '✅',
            skillName: skill,
        }));
        const triviaQualificationsInfo = challengesObject.author.qualifications.map(qual => ({
            qualIcon: '📖',
            qualName: qual,
        }));
        
        const titlesContainer = document.createElement('div');
        titlesContainer.className = 'titles-container';
        
        const titleHeader = document.createElement('h4');
        titleHeader.textContent = 'Titles';
        titlesContainer.appendChild(titleHeader);
        
        let titleContent;
        for(let i=0; i<triviaTitlesInfo.length; i++){
            titleContent = document.createElement('p');
            titleContent.textContent = `${triviaTitlesInfo[i].titleIcon} ${triviaTitlesInfo[i].titleName}`
            titlesContainer.appendChild(titleContent);
        }

        const skillsContainer = document.createElement('div');
        skillsContainer.className = 'skills-container';
        
        const skillsHeader = document.createElement('h4');
        skillsHeader.textContent = 'Skills';
        skillsContainer.appendChild(skillsHeader);

        let skillsContent;
        for(let i=0; i<triviaSkillsInfo.length; i++){
            skillsContent = document.createElement('p');
            skillsContent.textContent = `${triviaSkillsInfo[i].skillIcon} ${triviaSkillsInfo[i].skillName}`;
            skillsContainer.appendChild(skillsContent);
        }

        const qualificationsContainer = document.createElement('div');
        qualificationsContainer.className = 'qualifications-container';

        const qualificationsHeader = document.createElement('h4');
        qualificationsHeader.textContent = 'Qualifications';
        qualificationsContainer.appendChild(qualificationsHeader);

        let qualificationsContent;
        for(let i=0; i<triviaQualificationsInfo.length; i++){
            qualificationsContent = document.createElement('p');
            qualificationsContent.textContent = `${triviaQualificationsInfo[i].qualIcon} ${triviaQualificationsInfo[i].qualName}`;
            qualificationsContainer.appendChild(qualificationsContent);
        }

        triviaInformationContainer.appendChild(titlesContainer)
        triviaInformationContainer.appendChild(skillsContainer)
        triviaInformationContainer.appendChild(qualificationsContainer);

        triviaInformationContainer.style.display = 'flex';
        triviaInformationContainer.style.justifyContent = 'space-between';
        triviaInformationContainer.style.alignItems = 'start';
        triviaInformationContainer.style.margin = '0 15%';

        scriptElement.parentNode.insertBefore(triviaInformationContainer, scriptElement);
    }
    triviaInfo();

    const keywordsContainer = document.createElement('div');
    keywordsContainer.className = `keyword-container`;
    function keywordList(){
        const keywordContent = challengesObject.keywords.map(key => ({
            keywordName: key,
        }));
        const keywordHeader = document.createElement('h4');
        keywordHeader.textContent = 'Keywords';
        keywordHeader.style.width = '80%';
        keywordHeader.style.margin = '5px 10%';
        keywordsContainer.appendChild(keywordHeader);

        let keywordSpace = document.createElement('div');
        keywordSpace.className = 'keyword-space';
        let keyword;

        function generateBackgroundColor(){
            const characterUsed = `1234567890ABCDEF`;
            let color = `#`;
            for(let i=0; i<6; i++){
                color += characterUsed.charAt(Math.floor(Math.random() * characterUsed.length));
            }
            return color;
        }

        for(let i=0; i<keywordContent.length; i++){
            keyword = document.createElement('p');
            keyword.textContent = `#${keywordContent[i].keywordName}`;
            keyword.style.background = generateBackgroundColor();
            keywordSpace.appendChild(keyword);
            keywordsContainer.appendChild(keywordSpace);
            
            keyword.style.width = 'max-content';
            keyword.style.padding = '5px';
            keyword.style.borderRadius = '15px';
            keyword.style.color = 'white';
            keyword.style.marginBlockStart = '3px';
            keyword.style.marginBlockEnd = '3px';
            
            keywordSpace.style.display = 'flex';
            keywordSpace.style.flexWrap = 'wrap';
            keywordSpace.style.gap = '3px';
            keywordSpace.style.width = '70%';
            keywordSpace.style.margin = 'auto';

        }
        

        scriptElement.parentNode.insertBefore(keywordsContainer, scriptElement);
    }
    keywordList();