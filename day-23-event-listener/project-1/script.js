const mainScript = document.querySelector('script');

function header(){
    const headerWrapper = document.createElement('div');
    headerWrapper.className = 'header-wrapper';
    
    const headerTitle = document.createElement('h1');
    headerTitle.className = 'header-title';
    headerTitle.textContent = 'Number Generator';
    headerTitle.style.fontSize = '36px';
    headerWrapper.appendChild(headerTitle);

    const headerSubtitle = document.createElement('h3');
    headerSubtitle.className = 'header-subtitle';
    headerSubtitle.textContent = '30Days of JavaScript Day 23: Event Listener';
    headerSubtitle.style.fontSize = '28px';
    headerWrapper.appendChild(headerSubtitle);

    const headerAuthor = document.createElement('p');
    headerAuthor.className = 'header-author';
    headerAuthor.textContent = 'Asabeneh Yetayeh';
    headerAuthor.style.fontSize = '24px';
    headerWrapper.appendChild(headerAuthor);


    document.body.insertBefore(headerWrapper, mainScript);

    headerWrapper.style.width = 'max-content';
    headerWrapper.style.textAlign = 'center';
    headerWrapper.style.margin = '0 30%';
}
header();

function input(){
    const inputWrapper = document.createElement('div');
    inputWrapper.className = 'input-wrapper';

    const warningContainer = document.createElement('div');
    warningContainer.className = 'warning-container';

    const warningText = document.createElement('small');

    const inputContainer = document.createElement('div');
    inputContainer.className = 'input-container';
    
    const inputNumber = document.createElement('input');
    inputNumber.placeholder = 'input number here';

    const generateButton = document.createElement('button');
    generateButton.innerHTML = 'generate number';
    
    document.body.insertBefore(inputWrapper, mainScript);

    warningContainer.appendChild(warningText);

    inputWrapper.appendChild(warningContainer);
    inputWrapper.appendChild(inputContainer);

    inputContainer.appendChild(inputNumber);
    inputContainer.appendChild(generateButton);

    // styling input container
    
    inputContainer.style.margin = '10px 10%';
    inputContainer.style.display = 'flex';
    inputContainer.style.gap = '10px';

    //end styling input container

    //styling warning container
    warningContainer.style.margin = '0 10%';
    warningContainer.style.color = 'red';
    //end styling warning container

    //styling input and button

    inputNumber.style.height = '40px';
    inputNumber.style.width = '70%';
    
    generateButton.style.height = '45px';
    generateButton.style.width = '20%';

    // end styling input and button
}
input();

function output(){
    const numberWrapper = document.createElement('div');
    numberWrapper.className = 'number-wrapper';

    document.body.insertBefore(numberWrapper, mainScript);

    //number wrapper styling
    numberWrapper.style.margin = '20px 10%';
}
output();

const generateButton =  document.querySelector('button');
const warningText = document.querySelector('small');
const numberWrapper = document.querySelector('.number-wrapper');

function isPrimaryNumber(num){
    let isPrime = true;
    for(let j=2; j<num; j++){
        if(num % j == 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}

function generateNumber(num){
    let divNumber;
    for(let i=0; i<num; i++){
        divNumber = document.createElement('div');
        divNumber.textContent = i;
        if(isPrimaryNumber(i)){
            divNumber.style.background = 'red';
        }else if(i%2==0){
            divNumber.style.background = 'green'
        }else{
            divNumber.style.background = 'yellow';
        }

        divNumber.style.padding = '20px 40px';
        divNumber.style.fontSize = '30px';
        divNumber.style.color = 'white';
        divNumber.style.fontWeight = 'bold';
        divNumber.style.display = 'flex';
        divNumber.style.justifyContent = 'center';


        numberWrapper.appendChild(divNumber);
        numberWrapper.style.display = 'grid';
        numberWrapper.style.gridTemplateColumns = 'repeat(8, 1fr)';
        numberWrapper.style.gap = '5px';

    }
}
generateButton.addEventListener('click', () => {
    const inputValue = document.querySelector('input');
    const numbersToGenerate = parseInt(inputValue.value);
    let isNumberChanging;
    
    if(!isNaN(numbersToGenerate)){
        generateNumber(numbersToGenerate);
        isNumberChanging = true;
        if(isNumberChanging){
            numberWrapper.innerHTML = ''
            generateNumber(numbersToGenerate);
        }
        warningText.innerHTML = ''
    }else{
        warningText.textContent = 'input should be a number';
        numberWrapper.innerHTML = '';
    }
});


