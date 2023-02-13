// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.
    console.log(`Create a div container on HTML document and create 100 to 100 numbers dynamically and append to the container div.`);
    // i. Even numbers background is green
    // ii. Odd numbers background is yellow
    // iii. Prime numbers background is red
        const divContainer = document.querySelector('div');
        divContainer.style.maxWidth = '80%';
        divContainer.style.display = 'grid';
        divContainer.style.gridTemplateColumns = '1fr 1fr 1fr 1fr 1fr 1fr';
        divContainer.style.gap = '5px';
        divContainer.style.margin = `0 auto`;
        function isPrimeNumber(number){
            if(number <= 1){
                return false;
            }
            for(let i=2; i<number; i++){
                if(number%i===0){
                    return false;
                }
            }
            return true;
        }
        for(let i=1; i<=101; i++){
            let content = document.createElement('h1');
            content.style.textAlign = 'center';
            content.style.margin = '0';
            content.style.padding = '0';
            content.innerHTML = i;
            if(isPrimeNumber(content.innerHTML)){
                divContainer.appendChild(content);
                content.style.background = 'red';
            }else{
                if(content.innerHTML % 2 == 0){
                    content.style.background = 'green';
                    divContainer.appendChild(content);
                }else{
                    content.style.background = 'yellow';
                    divContainer.appendChild(content);
                }
            }
            content.style.color = 'white';
            content.style.fontSize = '60px';
        }
        /*
        for(let i=1; i<=101; i++){
            let content = document.createElement('h1');
            content.innerHTML = i;
            for(let j=2; j<content.innerHTML; j++){
                    if(content.innerHTML%j ===0){
                        if(content.innerHTML % 2 == 0){
                            content.style.background = 'green';
                            divContainer.appendChild(content);
                        }else{
                            content.style.background = 'yellow';
                            divContainer.appendChild(content);
                        }
                    }else{
                        divContainer.appendChild(content);
                    }
            }
        }
        */