function wrapperStyling(){
    const challengeTitle = document.querySelector('h1');
    const header = document.querySelector('header');
    if(header.hasChildNodes('h1')){
        header.childNodes = 'hahahah';
    }
    
    document.body.style.background = 'url(../images/galaxy.gif)';
    document.body.style.fontFamily = 'montserrat';

    challengeTitle.style.textAlign = 'center';
    challengeTitle.style.color = 'white';

}
wrapperStyling();

function inputStyling(){
    const header = document.querySelector('header');

    const weightInput = document.querySelector('input');
    const planetSelect = document.querySelector('select');
    const calculateButton = document.querySelector('button');

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';

    inputContainer.appendChild(weightInput);
    inputContainer.appendChild(planetSelect);
    inputContainer.appendChild(calculateButton);

    header.appendChild(inputContainer);

    //styling
    weightInput.style.width = '35%';
    weightInput.style.height = '30px';

    planetSelect.style.width = '30%';
    planetSelect.style.textAlign = 'center';

    calculateButton.style.width = '15%';
    calculateButton.style.textAlign = 'center';

    inputContainer.style.display = 'flex';
    inputContainer.style.justifyContent = 'center';
    inputContainer.style.width = '80%';
    inputContainer.style.columnGap = '10px';
    inputContainer.style.margin = '10px 10%';
    inputContainer.style.padding = '10px';
}
inputStyling();

function addPlanetOption(){
    const planetName = ['MERCURY', 'VENUS', 'EARTH', 'MOON', 'MARS', 'JUPITER', 'SATURN', 'URANUS', 'NEPTUNE', 'PLUTO'];
    const planetSelect = document.querySelector('select');
    let planetOption;
    for(let i=0; i<planetName.length; i++){
        planetOption = document.createElement('option');
        planetOption.textContent = planetName[i];
        planetOption.value = planetName[i].toLowerCase();
        planetSelect.appendChild(planetOption);
    }
}
addPlanetOption();

const planetWeight = document.querySelector('input');
const selectedPlanet = document.querySelector('select');

const calculateButton = document.querySelector('button');

function generatePlanet(weight, planet){
    const planetImg = document.querySelector('img');
    const description = document.querySelector('.description');

    const planetInfo = document.createElement('div');
    planetInfo.className = 'planet-info';

    const weightInfo = document.createElement('div');
    weightInfo.className = 'weight-info';

    let realWeight = 0;
    if(selectedPlanet.value == 'mercury'){
        planetImg.src = '../images/mercury.png';
        realWeight = (weight * 0.38).toFixed(2);
    }
    if(selectedPlanet.value == 'venus'){
        planetImg.src = '../images/venus.png';
        realWeight = (weight * 0.91).toFixed(2);
    }
    if(selectedPlanet.value == 'earth'){
        planetImg.src = '../images/earth.png';
        realWeight = (weight * 1).toFixed(2);
    }
    if(selectedPlanet.value == 'moon'){
        planetImg.src = '../images/moon.png';
        realWeight = (weight * 0.16).toFixed(2);
    }
    if(selectedPlanet.value == 'mars'){
        planetImg.src = '../images/mars.png';
        realWeight = (weight * 0.38).toFixed(2);
    }
    if(selectedPlanet.value == 'jupiter'){
        planetImg.src = '../images/jupiter.png';
        realWeight = (weight * 2.34).toFixed(2);
    }
    if(selectedPlanet.value == 'saturn'){
        planetImg.src = '../images/saturn.png';
        realWeight = (weight * 1.06).toFixed(2);
    }
    if(selectedPlanet.value == 'uranus'){
        planetImg.src = '../images/uranus.png';
        realWeight = (weight * 0.92).toFixed(2);
    }
    if(selectedPlanet.value == 'neptune'){
        planetImg.src = '../images/neptune.png';
        realWeight = (weight * 1.19).toFixed(2);
    }
    if(selectedPlanet.value == 'pluto'){
        planetImg.src = '../images/pluto.png';
        realWeight = (weight * 0.06).toFixed(2);
    }
    planetInfo.innerHTML = `the weight in <b>${planet}</b> is :`;
    weightInfo.innerHTML = `${realWeight}N`;


    description.appendChild(planetInfo);
    description.appendChild(weightInfo);

    description.style.color = 'white';
    description.style.fontSize = '24px';
    description.style.textAlign = 'center';

    planetInfo.style.width = 'max-content';

    weightInfo.style.background = 'rgba(100,200,145,0.6)';
    weightInfo.style.aspectRatio = '1/1';
    weightInfo.style.width = 'max-content';
    weightInfo.style.padding = '50px 30px 0px 30px';
    weightInfo.style.borderRadius = '50%';
    weightInfo.style.margin = '10px 25%';
    
}

calculateButton.addEventListener('click', () => {
    const flexContainer = document.querySelector('.flex-container');
    const planet = selectedPlanet.value;
    const weight = planetWeight.value;
    if(weight == '' || planet == 'none'){
        flexContainer.innerHTML = '<h1>mass or planet is required</h1>'
        flexContainer.style.color = 'white';
        flexContainer.style.margin = '0 35%';
        flexContainer.style.background = 'rgba(123,90,56,0.6)';
        flexContainer.style.padding = '10px 25px';
        flexContainer.style.width = 'max-content';
    }else{
        generatePlanet(weight, planet);
        flexContainer.style.display = 'flex';
        // flexContainer.style.justifyContent = 'space-around';
        flexContainer.style.alignItems = 'center';
        flexContainer.style.margin = '10px 25%';
        flexContainer.style.columnGap = '30px';
    }

});