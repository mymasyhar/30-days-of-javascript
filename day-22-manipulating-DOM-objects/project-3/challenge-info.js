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
    /*change year color every second*/
    let sentence = document.querySelector('h1');
    sentence.style.textAlign = 'center';
    const match = sentence.innerHTML.match(/\d+/);
    if(match){
        const firstMatch = match[0];
        sentence.innerHTML = sentence.innerHTML.replace(firstMatch, `<span>${firstMatch}</span>`)
    }
    let spanInSentence = document.querySelector('span');
    spanInSentence.style.fontSize = '50px';
    function changeColor(){
    const colorComponent = '1234567890ABCDEF';
        let color = `#`;
        for(let i=0; i<6; i++){
            color += colorComponent.charAt(Math.floor(Math.random() * colorComponent.length));
        }
        spanInSentence.style.color = color;
    }
    spanInSentence.style.color= setInterval(changeColor, 1000);
    /*end change year color every second*/

    /*insert date and change date background color every second*/
    const subHeading = document.querySelector('h2');
    subHeading.style.textAlign = 'center';
    const timeCreatedElement = document.createElement('p');
    timeCreatedElement.className = 'time-info';
    function getSpecificTime(){
        const monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let timesAndDates = new Date();
        let month = monthsInYear[timesAndDates.getMonth()];
        let date = timesAndDates.getDate();
        let year = timesAndDates.getFullYear();
        let hour = timesAndDates.getHours() < 10 ? `0${timesAndDates.getHours()}` : `${timesAndDates.getHours()}`;
        let minutes = timesAndDates.getMinutes() < 10 ? `0${timesAndDates.getMinutes()}` : `${timesAndDates.getMinutes()}`;
        let second = timesAndDates.getSeconds() < 10 ? `0${timesAndDates.getSeconds()}` : `${timesAndDates.getSeconds()}`;
        timeCreatedElement.innerHTML = `${month} ${date} ${year} ${hour}:${minutes}:${second}`;
    }
    timeCreatedElement.style.textAlign = 'center';
    timeCreatedElement.style.margin = ' auto 35%';
    function changeDateBackground(){
        const colorComponent = '1234567890ABCDEF';
        let color = `#`;
        for(let i=0; i<6; i++){
            color +=colorComponent.charAt(Math.floor(Math.random() * colorComponent.length));
        }
        timeCreatedElement.style.background = color;
        timeCreatedElement.style.padding = `10px`;
    }
    setInterval(getSpecificTime, 1000);
    setInterval(changeDateBackground, 1000);
    subHeading.insertAdjacentElement('afterend', timeCreatedElement);
    /*end insert date and change date background color every second*/

    const wrapper = document.querySelector('.wrapper');
    function renderChallenge(){
        const challengeData = challengesObject.challenges.map(chl => ({
            name: chl.name,
            topics: chl.topics,
            status: chl.status
        }));
        const wrapperContainer = document.createElement('div');
        wrapperContainer.className = 'wrapper-content';
        wrapperContainer.style.marginTop = '20px';
        wrapper.appendChild(wrapperContainer);
        let topicDiv
        let topicTitle;
        let details;
        let detailSummary;
        let summaryContent;
        let status;
        for(let i=0; i<challengeData.length; i++){
            topicDiv = document.createElement('div');
            
            topicTitle = document.createElement('p');
            topicTitle.className = 'title';
            topicTitle.textContent = challengeData[i].name;

            details = document.createElement('details');
            detailSummary =  document.createElement('summary');
            for(let j=0; j<challengeData[i].topics.length; j++){
                summaryContent = document.createElement('p');
                summaryContent.textContent = challengeData[i].topics[j];
                details.appendChild(summaryContent);
            }

            status = document.createElement('p')
            status.textContent = challengeData[i].status;
            
            detailSummary.textContent = challengeData[i].name.replace(/^\s*(\w+\s+){3}/, '');

            details.appendChild(detailSummary);

            topicDiv.appendChild(topicTitle);
            topicDiv.appendChild(details);
            topicDiv.appendChild(status);
            topicDiv.style.display = 'flex';
            topicDiv.style.justifyContent = 'space-around';
            topicDiv.style.alignItems = 'center';
            topicDiv.style.marginBottom = ' 3px';
            details.style.paddingTop = '10px';
            wrapperContainer.appendChild(topicDiv);
            if(challengeData[i].status == 'Done'){
                topicDiv.style.background = 'green';
            }else if(challengeData[i].status == 'Ongoing'){
                topicDiv.style.background = 'yellow';
            }else{
                topicDiv.style.background = 'red';
            }
            //detailSummary.textContent = challengeData[i].name.replace(/^\s*(\w+\s+){3}/, '');
        }
        wrapperContainer.style.padding = '0 20%';
    }
    renderChallenge();

    function authorInfo(){
        const authorInformation = document.createElement('div');
        authorInformation.className = 'author-info';

        const authorName = document.createElement('h2');
        authorName.textContent = `${challengesObject.author.firstName} ${challengesObject.author.lastName}`;

        const authorDescription = document.createElement('p');
        authorDescription.textContent = challengesObject.author.bio;
        
        authorInformation.appendChild(authorName);
        authorInformation.appendChild(authorDescription);

        authorInformation.style.display = 'flex';
        authorInformation.style.flexDirection = 'column';
        authorInformation.style.margin = '5px 20%';
        authorInformation.style.textAlign = 'center';

        
        document.body.appendChild(authorInformation);
    }
    authorInfo();
