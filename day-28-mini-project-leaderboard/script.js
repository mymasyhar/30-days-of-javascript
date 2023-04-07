const leaderboards = [
  {
    firstName: 'Masyhar',
    lastName: 'M.',
    cratedAt: '07/04/2023 20:34',
    country: 'Indonesia',
    score: 90,
  },
  {
    firstName: 'David',
    lastName: 'Smith',
    cratedAt: '07/04/2023 20:34',
    country: 'Canada',
    score: 90,
  },
  {
    firstName: 'Karim',
    lastName: 'M.',
    cratedAt: '07/04/2023 20:34',
    country: 'UK',
    score: 90,
  },
];
console.log(leaderboards[0].firstName, leaderboards[0].lastName);
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
    createdAt.textContent = leaderboards[i].cratedAt;

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
  }
}
resultWrapper();