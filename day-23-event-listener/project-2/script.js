const mainScript = document.querySelector('script');
function outputWrapper(){
    const outputContainer = document.createElement('div');
    outputContainer.className = 'output-container';

    const keyboardInfoContainer = document.createElement('div')
    keyboardInfoContainer.className = 'keyboard-info-container';

    const keyboardInfoText = document.createElement('h1');
    keyboardInfoText.className = 'keyboard-info-text';
    keyboardInfoText.textContent = `Press any Key`;

    const spanText = document.createElement('span');
    spanText.className = 'span-keyboard-info';

    const keyboardIdContainer = document.createElement('div');
    keyboardIdContainer.className = 'keyboard-id-container';

    keyboardInfoContainer.appendChild(keyboardInfoText);

    keyboardInfoText.appendChild(spanText);

    outputContainer.appendChild(keyboardInfoContainer);
    outputContainer.appendChild(keyboardIdContainer);

    //styling body
    document.body.style.overflowY = 'hidden';
    document.body.style.fontFamily = 'Montserrat';

    //styling container
    outputContainer.style.padding = '20px auto';
    outputContainer.style.width = '100%';
    outputContainer.style.margin = '20% auto';
    outputContainer.style.display = 'flex';
    outputContainer.style.flexDirection = 'column';
    outputContainer.style.justifyContent = 'center';
    outputContainer.style.alignItems = 'center';
    outputContainer.style.gap = '30px';
    //end styling container

    //styling keyboard info container
    keyboardInfoContainer.style.boxShadow = '7px 5px 20px -3px #368941';
    keyboardInfoContainer.style.padding = '0 30px';
    keyboardInfoContainer.style.textShadow = '1px 1px 4px #79CE96'
    //end styling keyboard info container

    //styling span element
    spanText.style.fontSize = '40px';
    spanText.style.color = '#a8dadc';
    //end styling span element

    //styling keyboard id container
    keyboardIdContainer.style.padding = '40px';
    keyboardIdContainer.style.fontSize = '60px';
    keyboardIdContainer.style.boxShadow = '7px 5px 20px -3px #368941';
    keyboardIdContainer.style.color = '#a8dadc';
    keyboardIdContainer.style.fontWeight = 'bold';

    document.body.insertBefore(outputContainer, mainScript);
}
outputWrapper();

const keyboardInfoText = document.querySelector('.keyboard-info-text');
const keyboardIdContainer = document.querySelector('.keyboard-id-container');
const spanText = document.querySelector('.span-keyboard-info');
document.body.addEventListener('keydown', (e) => {
    const keyCode = e.keyCode || e.which;
    let keyStrokes = '';
    
    switch(keyCode){
        case 8:
            keyStrokes = 'Delete';
            break;
        case 16:
            keyStrokes = 'Shift';
            break;
        case 17:
            keyStrokes = 'Control';
            break;
        case 18:
            keyStrokes = 'Option';
            break;
        case 20:
            keyStrokes = 'Caps Lock';
            break;
        case 32:
            keyStrokes = 'Space';
            break;
        case 37:
            keyStrokes = 'Left Arrow';
            break;
        case 38:
            keyStrokes = 'Up Arrow';
            break;
        case 39:
            keyStrokes = 'Right Arrow';
            break;
        case 40:
            keyStrokes = 'Bottom Arrow';
            break;
        case 91:
            keyStrokes = 'Left Command';
            break;
        case 93:
            keyStrokes = 'Right Command';
            break;
        default:
            keyStrokes = e.key;
    }
    spanText.textContent = keyStrokes;
    keyboardInfoText.textContent = `You pressed : `;
    keyboardInfoText.appendChild(spanText);

    keyboardIdContainer.textContent = e.keyCode;
});