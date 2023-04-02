const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

const byStartLetter = document.getElementById('start-letter');
const byAnyWord = document.getElementById('any-word');
const countryInput = document.getElementById('country-input');
const sortButton = document.getElementById('sorted-data');

let isStartLetter;
let isContainsLetter;
let isSortedData = false;

sortButton.addEventListener('click', () => {
    isSortedData = true;
})
byStartLetter.addEventListener('click', () => {
    byStartLetter.setAttribute('disabled', true);
    byAnyWord.removeAttribute('disabled', false);
    isStartLetter = true;
    isContainsLetter = false;
    console.log(`is started letter: ${isStartLetter}, is contains letter: ${isContainsLetter}`);
});
byAnyWord.addEventListener('click', () => {
    byAnyWord.setAttribute('disabled', true);
    byStartLetter.removeAttribute('disabled');
    isStartLetter = false;
    isContainsLetter = true;
    console.log(`is started letter: ${isStartLetter}, is contains letter: ${isContainsLetter}`);
});

function startLetter(letter){
    const result = countries.filter(country => country.startsWith(letter, 0));
    const finalResult = {
        startsWith: isStartLetter,
        containsLetter: isContainsLetter,
        data: result
    };
    return finalResult;
}

function containsLetter(letter){
    const finalResult = {
        startsWith: isStartLetter,
        containsLetter: isContainsLetter,
        data: countries.filter(country => country.includes(letter))
    };
    return finalResult;
}

const graphWrapper = document.querySelector('.graph-wrapper');

let value = countryInput.value;

/*
const graphWrapper = document.querySelector('.graph-wrapper');
function countryList(data){
    let countryWrapper;
    let countryText;
    for(let i=0; i<data; i++){
        countryWrapper = document.createElement('div');
        
        countryText = document.createElement('h2');
        countryText.textContent = data[i];

        countryWrapper.appendChild(countryText);

        graphWrapper.appendChild(countryWrapper);

        countryWrapper.style.display = 'grid';
        countryWrapper.style.textAlign = 'center';
        countryWrapper.style.alignItems = 'center';
        countryWrapper.style.justifyContent = 'center';
        countryWrapper.style.background = 'url(../images/map_image.jpeg)';
        countryWrapper.style.backgroundSize = 'cover';
        countryWrapper.style.filter = 'grayscale(25%) sepia(50%)';
        countryWrapper.style.width = '200px';
        countryWrapper.style.height = '200px';

        countryText.style.fontSize = '24px';
        countryText.style.color = 'grey';
    }
    graphWrapper.style.display = 'grid';
    graphWrapper.style.justifyContent = 'center';
    graphWrapper.style.alignItems = 'center';
    graphWrapper.style.gap = '30px';
    graphWrapper.style.padding = '10%';
    graphWrapper.style.gridTemplateColumns = 'repeat(6, 200px)';
    graphWrapper.style.background = 'rgb(102,200,184)';
}

countryInput.addEventListener('input', () => {
    let value = countryInput.value;
    let data;
    if(isStartLetter == true && isContainsLetter == true){
        data = startLetter(value)
        countryList(value);
    }else if (isStartLetter == true && isContainsLetter == false){
        data = startLetter(value);
        countryList(data);
    }else if (isStartLetter == false && isContainsLetter == true){
        data = containsLetter(value);
        countryList(data);
    }else{
        return '';
    }
});
*/