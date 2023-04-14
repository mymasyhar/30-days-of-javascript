const leaderboardData = [
  {
    firstName: 'firstName.value',
    lastName: 'lastName.value',
    country: 'country.value',
    score: 'score.value',
    createdAt: '14/04/2023 15:53',
  }
];

function generateDate(){
  const date = new Date();
  const day = date.getDate() < 10 ? `0${date.getDate()}` : `${date.getDate()}`;
  const month = date.getMonth()+1 < 10 ? `0${date.getMonth()+1}` : `${date.getMonth()+1}`;
  const year = date.getFullYear();
  const hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
  const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;

  return `${day}/${month}/${year} ${hours}:${minutes}`;
}
console.log(generateDate());

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const country = document.getElementById('country');
const score = document.getElementById('score');

const addLeaderboard = document.getElementById('submitData');
const container = document.querySelector('.leaderboard-container');
addLeaderboard.addEventListener('click', () => {
  const data = {
    firstName: firstName.value,
    lastName: lastName.value,
    country: country.value,
    score: Number(score.value),
    createdAt: generateDate(),
  }
  leaderboardData.push(data);
  container.appendChild(renderLeaderboard());
  renderLeaderboard();
  console.log(leaderboardData);
});
function renderLeaderboard(){
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

  for(let i=0; i<leaderboardData.length; i++){
    leaderboardList = document.createElement('div');
    leaderboardList.className = 'leaderboard-list';

    nameContainer = document.createElement('div');
    fullName = document.createElement('p');
    fullName.textContent = `${leaderboardData[i].firstName} ${leaderboardData[i].lastName}`;
    createdAt = document.createElement('p');
    createdAt.textContent = `${leaderboardData[i].createdAt}`;
    nameContainer.appendChild(fullName)
    nameContainer.appendChild(createdAt);

    leaderboardList.appendChild(nameContainer);

    country = document.createElement('p');
    country.textContent = `${leaderboardData[i].country}`;

    leaderboardList.appendChild(country);
    
    score = document.createElement('p');
    score.id = 'leaderboard-score';
    score.textContent = `${leaderboardData[i].score}`;

    leaderboardList.appendChild(score);

    actionContainer = document.createElement('div');
    actionContainer.className = 'action-group';
    deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.id = 'delete';
    
    deleteButton.addEventListener('click', (e) => {
      e.target.parentNode.parentNode.remove();
      leaderboardData.splice(i, 1);
    })
    
    plusButton = document.createElement('button');
    plusButton.textContent = 'plus';
    plusButton.id = 'plus';
    plusButton.addEventListener('click', () => {
      leaderboardData[i].score += 5;
      score.textContent = leaderboardData[i].score;
      console.log(leaderboardData[i].score);
    })
    
    minusButton = document.createElement('button');
    minusButton.textContent = 'minus';
    minusButton.id = 'minus';
    minusButton.addEventListener('click', () => {
      leaderboardData[i].score -= 5;
      score.textContent = leaderboardData[i].score;
      console.log(leaderboardData[i].score);
    })
    
    actionContainer.appendChild(deleteButton)
    actionContainer.appendChild(plusButton)
    actionContainer.appendChild(minusButton);

    leaderboardList.appendChild(actionContainer);
  }
  return leaderboardList;
}