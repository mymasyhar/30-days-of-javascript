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
const subjectResult = setInterval(subjectCounter, 1000);

function headerStyling(){
  const headerName = document.querySelector('.header-name');
  headerName.textContent = author.name;

  const headerSubject = document.querySelector('.header-subject');

  headerSubject.style.display = 'flex';
  headerSubject.style.alignItems = 'center';
  headerSubject.style.gap = '20px';
  headerSubject.style.background = 'rgb(120,80,239)';
  headerSubject.style.fontSize = '24px';
  headerSubject.style.fontWeight = 'bold';
  headerSubject.style.padding = '10px 20px';

  subjectIcon.style.fontSize = '32px';

  const headerInfo = document.getElementById('info');
  headerInfo.textContent = author.bio;
}
headerStyling();

const techStackText = document.getElementById('tech-stack');
let counterStack = 0;
function changeStackText(){
  let colorUsed = `#`;
  const characterUsed = '1234567890ABCDEF';
  function changeColorText(){
    for(let i=0; i<6; i++){
      colorUsed += characterUsed.charAt(Math.floor(Math.random() * characterUsed.length));
    }
    return colorUsed;
  }
  
  techStackText.style.fontSize = '32px';
  techStackText.style.color = changeColorText();

  const data = author.keywords;
  if(counterStack < data.length){
    techStackText.textContent = data[counterStack]
    counterStack++;
  }
  if(counterStack >= data.length){
    counterStack = 0;
  }
}
const stackResult = setInterval(changeStackText, 1500);