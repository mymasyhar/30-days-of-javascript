// ------------------------------ Exercises: Level 3 ------------------------------
document.body.style.fontFamily = 'Montserrat';
// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
    console.log(`Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.`);
    // i. The year color is changing every 1 second
        let sentence = document.querySelector('h1');
        sentence.style.textAlign = 'center';
        const match = sentence.innerHTML.match(/\d+/);
        if(match){
            const firstMatch = match[0];
            sentence.innerHTML = sentence.innerHTML.replace(firstMatch, `<span>${firstMatch}</span>`)
        }
        let spanInSentence = document.querySelector('span');
        spanInSentence.style.fontSize = '50px';
        function changeColor(){
            const colorComponent = '1234567890ABCDEF';
            let color = `#`;
            for(let i=0; i<6; i++){
                color += colorComponent.charAt(Math.floor(Math.random() * colorComponent.length));
            }
            spanInSentence.style.color = color;
        }
        spanInSentence.style.color= setInterval(changeColor, 1000);
        //setInterval(changeColor, 1000);
    
    // ii. The date and time background color is changing every on seconds
        const subHeading = document.querySelector('h2');
        subHeading.style.textAlign = 'center';
        const timeCreatedElement = document.createElement('p');
        function getSpecificTime(){
            const monthsInYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
            let timesAndDates = new Date();
            let month = monthsInYear[timesAndDates.getMonth()];
            let date = timesAndDates.getDate();
            let year = timesAndDates.getFullYear();
            let hour = timesAndDates.getHours() < 10 ? `0${timesAndDates.getHours()}` : `${timesAndDates.getHours()}`;
            let minutes = timesAndDates.getMinutes() < 10 ? `0${timesAndDates.getMinutes()}` : `${timesAndDates.getMinutes()}`;
            let second = timesAndDates.getSeconds() < 10 ? `0${timesAndDates.getSeconds()}` : `${timesAndDates.getSeconds()}`;
            timeCreatedElement.innerHTML = `${month} ${date} ${year} ${hour}:${minutes}:${second}`;
        }
        timeCreatedElement.style.textAlign = 'center';
        timeCreatedElement.style.margin = ' auto 35%';
        function changeDateBackground(){
            const colorComponent = '1234567890ABCDEF';
            let color = `#`;
            for(let i=0; i<6; i++){
                color +=colorComponent.charAt(Math.floor(Math.random() * colorComponent.length));
            }
            timeCreatedElement.style.background = color;
            timeCreatedElement.style.padding = `10px`;
        }
        setInterval(getSpecificTime, 1000);
        setInterval(changeDateBackground, 1000);
        subHeading.insertAdjacentElement('afterend', timeCreatedElement);

    // iii. Completed challenge has background green
        const unorderedList = document.querySelector('ul');
        unorderedList.style.whiteSpace = 'nowrap';
        //unorderedList.style.display = 'inline-block';
        const listItems = document.querySelectorAll('li');
        for(let i=0; i<listItems.length; i++){
            listItems[i].style.display = 'block';
            listItems[i].style.justifyContent = 'center';
            listItems[i].style.padding = '25px';
            listItems[i].style.maxWidth = '50%';
            listItems[i].style.textAlign = 'left';
            listItems[i].style.listStyle = 'none';
            listItems[i].style.translate = '40%';
            listItems[i].style.margin = '2px 0';
            if(listItems[i].textContent.includes('Done')){
                listItems[i].style.background = 'green'
    // iv. Ongoing challenge has background yellow
            }else if(listItems[i].textContent.includes('Ongoing')){
                listItems[i].style.background = 'yellow';
            }else{
    // v. Coming challenges have background red
                listItems[i].style.background = 'red';
            }
        }