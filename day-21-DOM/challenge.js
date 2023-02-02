// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.
console.log(`Develop the following application, use the following HTML elements to get started with. You will get the same code on starter folder. Apply all the styles and functionality using JavaScript only.`);
const wrapper = document.querySelector('.wrapper');
wrapper.style.textAlign = 'center';

    // i. The year color is changing every 1 second
        console.log(`i. The year color is changing every 1 second`);
        const spanElement = document.querySelector('span');
        function changeColor(){
            const colorUsed = ['red', 'green', 'blue', 'burgundy', 'violet', 'yellow'];
            spanElement.style.color = colorUsed[Math.floor(Math.random() * colorUsed.length)];
        }
        setInterval(changeColor, 1000);

    // ii. The date and time background color is changing every on seconds
        console.log(`The date and time background color is changing every on seconds`);
        const dateElement = document.getElementById('date');
        function changeDateBackground(){
            const backgroundUsed = ['red','green','blue','violet','pink','yellow','maroon'];
            const dateComponent = new Date();
            const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
            const month = monthNames[dateComponent.getMonth()];
            const year = dateComponent.getFullYear();
            const day = dateComponent.getDate() < 10 ? `0${dateComponent.getDate()}` : `${dateComponent.getDate()}`;
            const minutes = dateComponent.getMinutes() < 10 ? `0${dateComponent.getMinutes()}` : dateComponent.getMinutes();
            const seconds = dateComponent.getSeconds() < 10 ? `0${dateComponent.getSeconds()}` : dateComponent.getSeconds();
            const times = `${dateComponent.getHours()} : ${minutes} : ${seconds}`;
            dateElement.innerHTML = `${month} ${day} ${year} ${times}`;
            dateElement.style.background = backgroundUsed[Math.floor(Math.random() * backgroundUsed.length)];
        }
        setInterval(changeDateBackground, 1000);

    // iii. Completed challenge has background green, Ongoing challenge has background yellow, Coming challenges have background red
        console.log(`Completed challenge has background green`);
        const ul = document.querySelector('ul');
        const li = document.querySelectorAll('li');
        for(let i=0; i<li.length; i++){
            li[i].style.listStyle = 'none';
            if(li[i].innerHTML.includes('Done')){
                li[i].style.background = 'green';
            } else if(li[i].innerHTML.includes('Ongoing')){
                li[i].style.background = 'yellow';
            }else{
                li[i].style.background = 'red';
            }
        }
