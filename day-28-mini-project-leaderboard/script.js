const leaderboardData = [];

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
  container.appendChild(renderLeaderboard(leaderboardData));
  renderLeaderboard(leaderboardData);
  console.log(leaderboardData);
});

function leaderboardOrder(data){
  const result = Object.entries(data).sort((a,b) => b[1].score - a[1].score);
  renderLeaderboard(result);
  return result;

}
console.log(leaderboardOrder(leaderboardData));

function renderLeaderboard(leaderboard){
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

  for(let i=0; i<leaderboard.length; i++){
    leaderboardList = document.createElement('div');
    leaderboardList.className = 'leaderboard-list';

    nameContainer = document.createElement('div');
    fullName = document.createElement('p');
    fullName.textContent = `${leaderboard[i].firstName} ${leaderboard[i].lastName}`;
    createdAt = document.createElement('p');
    createdAt.textContent = `${leaderboard[i].createdAt}`;
    nameContainer.appendChild(fullName)
    nameContainer.appendChild(createdAt);

    leaderboardList.appendChild(nameContainer);

    country = document.createElement('p');
    country.textContent = `${leaderboard[i].country}`;

    leaderboardList.appendChild(country);
    
    score = document.createElement('p');
    score.id = 'leaderboard-score';
    score.textContent = `${leaderboard[i].score}`;

    leaderboardList.appendChild(score);

    actionContainer = document.createElement('div');
    actionContainer.className = 'action-group';
    deleteButton = document.createElement('button');
    deleteButton.textContent = 'delete';
    deleteButton.className = 'delete';
    
    
    deleteButton.addEventListener('click', (e) => {
      e.preventDefault();
      e.target.parentNode.parentNode.remove();
      leaderboard.splice(i, 1);
      renderLeaderboard(leaderboardData);
    })
    
    
    plusButton = document.createElement('button');
    plusButton.textContent = 'plus';
    plusButton.className = 'plus';
    
    plusButton.addEventListener('click', (e) => {
      e.preventDefault();
      leaderboard[i].score += 5;
      score.textContent = leaderboard[i].score;
      renderLeaderboard(leaderboardData);
      console.log(leaderboard[i].score);
      leaderboardOrder(leaderboardData)
    })
    
    
    minusButton = document.createElement('button');
    minusButton.textContent = 'minus';
    minusButton.className = 'minus';
    
    minusButton.addEventListener('click', (e) => {
      e.preventDefault();
      leaderboard[i].score -= 5;
      score.textContent = leaderboard[i].score;
      renderLeaderboard(leaderboardData);
      console.log(leaderboard[i].score);
      leaderboardOrder(leaderboardData)
    })
    
    
    actionContainer.appendChild(deleteButton)
    actionContainer.appendChild(plusButton)
    actionContainer.appendChild(minusButton);

    leaderboardList.appendChild(actionContainer);
  }
  return leaderboardList;
}

const deleteButton = document.querySelectorAll('.delete');
deleteButton.forEach(del => {
  del.addEventListener('click', (e) => {
    console.log(e.target.parentNode);
  })
})