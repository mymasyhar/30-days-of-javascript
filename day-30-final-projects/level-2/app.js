document.body.style.fontFamily = 'Montserrat';

const allInputs = document.querySelectorAll('input');

const patternValidation = {
  firstname: /^[a-zA-Z]{3,16}$/,
  lastname: /^[a-zA-Z]{3,13}$/,
  telephone: /^[0-9|\-$]{11,13}$/,
  password: /^[\w@-]{6,20}$/,
  email: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
  bio: /^[a-z]{8,50}$/

};

function validateInput(field, regex){
  if(regex.test(field.value)){
    field.className = 'valid';
  }else{
    field.className = 'invalid';
  }
}
const allWarningText = document.querySelectorAll('p');
allWarningText.forEach(p => {
  p.style.textAlign = 'center';
  p.style.fontWeight = 'bold';
  p.style.fontSize = '16px';
  p.style.color = '#F7D060';
});

const submitButton = document.querySelector('button');
submitButton.style.fontSize = '24px';
submitButton.style.padding = '10px';
submitButton.style.width = '120px';
submitButton.style.border = 'none';
submitButton.style.background = '#B9EDDD'
submitButton.style.color = '#fff';
submitButton.style.borderRadius = '5px';


allInputs.forEach(input => {
  input.addEventListener('keyup', (e) => {
    input.id = e.target.attributes.name.value;
    // console.log(e.target.value);
    validateInput(e.target, patternValidation[e.target.attributes.name.value])
    // console.log(validateInput(e.target, patternValidation[e.target.attributes.name.value]));
    if(input.className == 'valid'){
      input.nextElementSibling.textContent = '';
    }else{
      if(input.id == 'firstname'){
        input.nextElementSibling.textContent = 'First name must be and contain 3 - 16 characters';
      }else if(input.id == 'lastname'){
        input.nextElementSibling.textContent = 'Last name must be and contain 3 - 16 characters';
      }else if(input.id == 'email'){
        input.nextElementSibling.textContent = `Email must be a valid address, e.g. me@mydomain.com`
      }else if(input.id == 'password'){
        input.nextElementSibling.textContent = `Password must alphanumeric (@, _ and - are also allowed) and be 6 - 20
        characters`;
      }else if(input.id == 'telephone'){
        input.nextElementSibling.textContent = `<p>Telephone must be a valid UK telephone number (11 digits)`;
      }else{
        input.nextElementSibling.textContent = `Bio must contain only lowercase letters, numbers and hyphens and be 8 -
        50 characters`;
      }

    }
  });
})