document.body.style.fontFamily = 'Montserrat';

function generateColor(){
  const colorElement = '1234567890ABCDEF';
  let colorUsed = `#`;
  for(let i=0; i<6; i++){
    colorUsed += colorElement.charAt(Math.floor(Math.random() * colorElement.length));
  }
  return colorUsed;
}

const fontSize = () => {
  const size = [40,48,52,64,72,80,88,92,100,110];
  // Math.floor(Math.random() * 100) <= 50 ? `120px` : `${Math.floor(Math.random() * 100)}px`
  return `${size[Math.floor(Math.random() * size.length)]}px`;
};
console.log(fontSize());

const textContainer = document.querySelector("h1");
function generateStyle(){
  const text = '30 Days of JavaScript Masyhar Muharam';
  let insertedChar;
  for(let i=0; i<text.length; i++){
    insertedChar = document.createElement('span');
    insertedChar.textContent = text[i].toLocaleUpperCase();
    insertedChar.style.color = generateColor();
    textContainer.appendChild(insertedChar);
  }
  // textContainer.style.fontSize = fontSize();
  // textContainer.style.position = 'fixed';
}

const textWrapper = document.querySelector(".text-wrapper");
const backgroundChange = () =>{
  textWrapper.style.background = generateColor();
  textWrapper.style.height = '75vh'
  textWrapper.style.width = '85%';
  textWrapper.style.margin = '20px 20px';
  // textWrapper.style.position = 'absolute';
  // textWrapper.style.top = '0';
  // textWrapper.style.left = '0';
  textWrapper.style.padding = '5%';
}

const animating = () => {
  const fontFam = ['Montserrat', 'Twentieth Century', 'Roboto', 'Poppins', 'Futura'];
  textContainer.innerHTML = '';
  textContainer.style.fontFamily = fontFam[Math.floor(Math.random() * fontFam.length)];
  textContainer.style.fontSize = fontSize();
  generateStyle();
}
// animating();

// const result = setInterval(animating, 2000);
const background = setInterval(backgroundChange, 3000);
const result = setInterval(animating, 5000);