const author = {
  name: 'Masyhar Muharam',
  titles: [
    
    {
      icon: '🌱',
      title: 'Educator'
    },
    {
      icon: '💻',
      title: 'Programmer'
    },
    {
      icon: '🌐',
      title: 'Developer'
    },
    
    /*
    ["🌱", "Educator"],
    ["💻", "Programmer"],
    ["🌐", "Developer"],
    */
  ],
  course: [
    'JavaScript for Everyone',
    '30Days of Python',
    '30Days of JavaScript'
  ],
  bio: "I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.",
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
};

let subjectIcon = document.getElementById('subject-icon');
let subjectText = document.getElementById('subject-text');

let counter = 0;  
function subjectCounter(){
  const data = author.titles.map(auth => ({
    icon: auth.icon,
    name: auth.title
  }));
  if(counter < data.length){
    subjectIcon.innerHTML = data[counter].icon;
    subjectText.innerHTML = data[counter].name;
    counter++;
  }
  if(counter >= data.length){
    counter = 0;
  }
}
const subjectResult = setInterval(subjectCounter, 2000);

function headerStyling(){
  const headerName = document.querySelector('.header-name');
  headerName.textContent = author.name;

  const headerSubject = document.querySelector('.header-subject');

  headerSubject.style.display = 'flex';
  headerSubject.style.gap = '20px';
  headerSubject.style.background = 'rgb(120,80,239)';

  subjectText.style.transition = 'translateX(50%) 1.5s';
  subjectText.style.transitionTimingFunction = 'ease-in-out';

  const headerInfo = document.getElementById('info');
  headerInfo.textContent = author.bio;
}
headerStyling();