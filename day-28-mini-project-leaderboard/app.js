const leaderboard = [
  {
    firstName: 'a',
    lastName: 'b',
    country: 'indonesia',
    score: 100,
    createdAt: '15/04/2023 23:45',
  },
  {
    firstName: 'c',
    lastName: 'd',
    country: 'indonesia',
    score: 120,
    createdAt: '15/04/2023 23:48',
  },
  {
    firstName: 'e',
    lastName: 'f',
    country: 'indonesia',
    score: 90,
    createdAt: '15/04/2023 23:40',
  }
];
document.body.style.fontFamily = 'Montserrat';
const header = document.querySelector('header');
header.style.textAlign = 'center';

const leaderboardForm = document.querySelectorAll('.leaderboard-form input');
leaderboardForm.forEach(button => {
  button.style.padding = '15px';
  button.style.margin = '5px';
});

const leaderboardContainer = document.querySelector('.leaderboard-container');

const generateDate = () => {
  const fullDate = new Date();
  const date = fullDate.getDate() < 10 ? `0${fullDate.getDate()}` : `${fullDate.getDate()}`;
  const month = fullDate.getMonth()+1 < 10 ? `0${fullDate.getMonth()+1}` : `${fullDate.getMonth()+1}`;
  const year = fullDate.getFullYear();
  const hour = fullDate.getHours() < 10 ? `0${fullDate.getHours()}` : `${fullDate.getHours()}`;
  const minute = fullDate.getMinutes() < 10 ? `0${fullDate.getMinutes()}` : `${fullDate.getMinutes()}`;
  const createdAt = `${date}/${month}/${year} ${hour}:${minute}`;
  return createdAt;
}

const leaderboardPosition = (leaderboard) => {
  const result = Object.entries(leaderboard).sort((a,b) => b[1].score - a[1].score);
  return result;
}

const warningContainer = document.querySelector('.warning');
warningContainer.style.display = 'flex';
warningContainer.style.margin = '20px 0';
warningContainer.style.justifyContent = 'center';
warningContainer.style.alignItems = 'center';
const addData = (data) => {
  leaderboard.push(data);
  return leaderboardPosition(leaderboard);
}

const submitButton = document.getElementById('submitData');
submitButton.style.padding = '15px';
submitButton.addEventListener('click', () => {
  const firstName = document.getElementById('firstName')
  const lastName = document.getElementById('lastName')
  const country = document.getElementById('country')
  const score = document.getElementById('score');
  const submitedData = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    score: parseInt(score.value),
    createdAt: generateDate(),
  }
  if(submitedData.firstName == '' || submitedData.lastName == '' || submitedData.country == '' || submitedData.score == ''){
    warningContainer.innerHTML = `<h4 style="color:red;">all input are required</h4>`;
    leaderboardContainer.innerHTML = '';
    leaderboardPosition(leaderboard);
    renderLeaderboard(leaderboard)
  }else{
    warningContainer.innerHTML = '';
    addData(submitedData);
    leaderboardPosition(leaderboard);
    leaderboardContainer.innerHTML = '';
    renderLeaderboard(leaderboard);
  }
});

const renderLeaderboard = () => {
  const processedData = leaderboardPosition(leaderboard);
  let leaderboardList;
  
  let nameContainer;
  let fullName;
  let createdAt;

  let country;

  let score;

  let actionContainer;
  let deleteButton;
  let plusButton;
  let minusButton;
  for(let i=0; i<processedData.length; i++){
    leaderboardList = document.createElement('div');
    leaderboardList.className = 'leaderboard-list';

    nameContainer = document.createElement('div');
    fullName = document.createElement('h3');
    fullName.textContent = `${processedData[i][1].firstName.toUpperCase()} ${processedData[i][1].lastName.toUpperCase()}`;
    createdAt = document.createElement('p');
    createdAt.textContent = `${processedData[i][1].createdAt.toUpperCase()}`;
    nameContainer.appendChild(fullName)
    nameContainer.appendChild(createdAt);

    leaderboardList.appendChild(nameContainer);

    country = document.createElement('p');
    country.textContent = `${processedData[i][1].country.toUpperCase()}`;

    leaderboardList.appendChild(country);
    
    score = document.createElement('p');
    score.id = 'leaderboard-score';
    score.textContent = `${processedData[i][1].score}`;

    leaderboardList.appendChild(score);

    actionContainer = document.createElement('div');
    actionContainer.className = 'action-group';
    deleteButton = document.createElement('button');
    deleteButton.innerHTML = `<i class = 'fas fa-trash-can'></i>`;
    deleteButton.id = 'delete';
    deleteButton.addEventListener('click', () => {
      leaderboard.splice(processedData[i][0], 1);
      leaderboardContainer.innerHTML = '';
      leaderboardPosition(leaderboard);
      renderLeaderboard(leaderboard);
    })

    plusButton = document.createElement('button');
    plusButton.textContent = '+5';
    plusButton.id = 'plus';
    plusButton.addEventListener('click', () => {
      processedData[i][1].score += 5;
      score.textContent = `${processedData[i][1].score}`;
      leaderboardPosition(leaderboard);
      leaderboardContainer.innerHTML = '';
      renderLeaderboard(leaderboard);
    })

    minusButton = document.createElement('button');
    minusButton.textContent = '-5';
    minusButton.id = 'minus';
    minusButton.addEventListener('click', () => {
      processedData[i][1].score -= 5;
      score.textContent = `${processedData[i][1].score}`;
      leaderboardPosition(leaderboard);
      leaderboardContainer.innerHTML = '';
      renderLeaderboard(leaderboard);
    })

    actionContainer.appendChild(deleteButton)
    actionContainer.appendChild(plusButton)
    actionContainer.appendChild(minusButton);

    leaderboardList.appendChild(actionContainer);
    
    leaderboardContainer.appendChild(leaderboardList); 
    
    leaderboardList.style.display = 'flex';
    leaderboardList.style.margin = '10px 15%';
    leaderboardList.style.padding = '10px 15px';
    leaderboardList.style.justifyContent = 'space-between';
    leaderboardList.style.alignItems = 'center';
    leaderboardList.style.background = '#FFEBEB';
    
    fullName.style.margin = '0 0 10px 0';
    
    createdAt.style.margin = '0';
    createdAt.style.color = '#6DA9E4';

    country.style.fontSize = '20px'
    
    score.style.fontSize = '20px';

    const allActionButton = document.querySelectorAll('.leaderboard-list button');
    allActionButton.forEach(button => {
      button.style.padding = '15px';
      button.style.margin = '10px 5px';
      button.style.border = 'none';
      button.style.background = '#F6BA6F';
      button.style.borderRadius = '50%';
      button.style.cursor = 'pointer';
      button.style.aspectRatio = '1/1';

      button.addEventListener('onmouse', () => {
        button.style.background = '#ADE4DB';
      })
    })
    

  }
  return leaderboardContainer;
}