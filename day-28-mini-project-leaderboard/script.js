const leaderboards = [
  {
    firstName: 'Masyhar',
    lastName: 'M.',
    createdAt: '07/04/2023 20:34',
    country: 'Indonesia',
    score: 90,
  },
  {
    firstName: 'David',
    lastName: 'Smith',
    createdAt: '07/04/2023 20:34',
    country: 'Canada',
    score: 90,
  },
  {
    firstName: 'Karim',
    lastName: 'M.',
    createdAt: '07/04/2023 20:34',
    country: 'UK',
    score: 90,
  },
];
const allInputs = document.querySelectorAll('input').forEach(input => {
  switch(input.id){
    case 'firstName':
      input.placeholder = 'first name'.toLocaleUpperCase();
      break;
    case 'lastName':
      input.placeholder = 'last name'.toLocaleUpperCase();
      break;
    case 'country':
      input.placeholder = 'country'.toLocaleUpperCase();
      break;
    default:
      input.placeholder = 'scores'.toLocaleUpperCase();
      break;
  }
  input.style.border = '1px solid #FF3E23';
  input.style.padding = '10px';
  input.style.width = '175px';
});

function headerStyling(){
  const header = document.querySelector('header');
  header.style.textAlign = 'center';

  const buttonSubmit = document.querySelector('button');
  buttonSubmit.style.border = 'none';
  buttonSubmit.style.padding = '12px 20px'
  buttonSubmit.style.width = '200px'
}
headerStyling();

resultWrapper();

const buttonSubmit = document.getElementById('submitScore');
const wrapper = document.querySelector('.wrapper');
buttonSubmit.addEventListener('click', () => {
  const fullDate = new Date();
  const date = fullDate.getDate() < 10 ? `0${fullDate.getDate()}` : `${fullDate.getDate()}`;
  const month = fullDate.getMonth()+1 < 10 ? `0${fullDate.getMonth()}` : `${fullDate.getMonth()}`;
  const year = fullDate.getFullYear();
  const hour = fullDate.getHours() < 10 ? `0${fullDate.getHours()}` : `${fullDate.getHours()}`;
  const minute = fullDate.getMinutes() < 10 ? `0${fullDate.getMinutes()}` : `${fullDate.getMinutes()}`;
  const createdAt = `${date}/${month}/${year} ${hour}:${minute}`
  const firstName = document.getElementById('firstName').value;
  const lastName = document.getElementById('lastName').value;
  const country = document.getElementById('country').value;
  const score = document.getElementById('score').value;
  
  const data = {firstName, lastName, createdAt, country, score};
  if(firstName == null || lastName == null || country == null || score == null){
    console.log('null data');
  }else{
    wrapper.innerHTML = '';
    leaderboards.push(data);
    resultWrapper();
  }
  
})

function resultWrapper(){
  const leaderboardsWrapper = document.querySelector('.wrapper');
  let leaderboardData;
  
  let dataName;
  let name;
  let createdAt;
  
  let dataCountry;
  let country;

  let dataScore;
  let score;

  let dataOption;
  let buttonDelete;
  let buttonDeleteIcon;
  let buttonPlus;
  let buttonMinus;
  
  for(let i=0; i<leaderboards.length; i++){
    leaderboardData = document.createElement('div');

    dataName = document.createElement('div');
    name = document.createElement('p');
    name.textContent = `${leaderboards[i].firstName.toLocaleUpperCase()} ${leaderboards[i].lastName.toLocaleUpperCase()}`;
    createdAt = document.createElement('p');
    createdAt.textContent = leaderboards[i].createdAt;

    dataName.appendChild(name);
    dataName.appendChild(createdAt);

    dataCountry = document.createElement('div');
    country = document.createElement('p');
    country.textContent = leaderboards[i].country;

    dataCountry.appendChild(country);

    dataScore = document.createElement('div');
    score = document.createElement('p');
    score.textContent = leaderboards[i].score;

    dataScore.appendChild(score);

    dataOption = document.createElement('div');
    buttonDelete = document.createElement('button');
    buttonDeleteIcon = document.createElement('i');
    buttonDeleteIcon.className = 'fas fa-trash-can';

    buttonDelete.appendChild(buttonDeleteIcon);

    buttonPlus = document.createElement('button');
    buttonPlus.textContent = '+5'
    
    buttonMinus = document.createElement('button');
    buttonMinus.textContent = '-5'
    
    dataOption.appendChild(buttonDelete)
    dataOption.appendChild(buttonPlus)
    dataOption.appendChild(buttonMinus)

    leaderboardData.appendChild(dataName)
    leaderboardData.appendChild(dataCountry)
    leaderboardData.appendChild(dataScore)
    leaderboardData.appendChild(dataOption);

    leaderboardsWrapper.appendChild(leaderboardData);

    leaderboardData.style.display = 'flex';
    leaderboardData.style.alignItems = 'center';
    leaderboardData.style.justifyContent = 'space-between';
    leaderboardData.style.background = '#FF97ED';
    leaderboardData.style.marginBottom = '10px';
    leaderboardData.style.padding = '0 15px';

    leaderboardsWrapper.style.margin = '10px 15%';
  }
}