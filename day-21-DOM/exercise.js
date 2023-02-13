// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
    console.log(`1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name`);
    const first = document.querySelector('p');
    console.log(first);

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
    console.log(`2. Get each of the the paragraph using document.querySelector('#id') and by their id`);
    const firstParagraph = document.querySelector('#first-paragraph');
    console.log(firstParagraph);
    const secondParagraph = document.querySelector('#second-paragraph');
    console.log(secondParagraph);
    const thirdParagraph = document.querySelector('#third-paragraph');
    console.log(thirdParagraph);
    const fourthParagraph = document.querySelector('#fourth-paragraph');
    console.log(fourthParagraph);
// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
    console.log(`3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name`);
    const allParagraph = document.querySelectorAll('p');
    console.log(allParagraph);

// 4. Loop through the nodeList and get the text content of each paragraph
    console.log(`4. Loop through the nodeList and get the text content of each paragraph`);
    allParagraph.forEach(content => {
        console.log(content);
    });

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
    console.log(`5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph`);
    fourthParagraph.textContent = 'Fourth Paragraph';
    console.log(fourthParagraph);

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
    /* console.log(`6. Set id and class attribute for all the paragraphs using different attribute setting methods`);
    for(let i=0; i<allParagraph.length; i++){
        allParagraph[i].id = `new-paragraph-id-${i+1}`;
        allParagraph[i].className = `new-paragraph-class-${i+1}`;
    }
    console.log(allParagraph); */

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Change stye of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
    console.log(`1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)`);
    for(let i=0; i<allParagraph.length; i++){
        const fontUsed = ['Montserrat', 'Poppins', 'Futura', 'JetBrains Mono', 'Roboto'];
        const colorUsed = ['#181823', '#537FE7','#C0EEF2','#E9F8F9'];
        const backgroundUsed = ['#F0EEED', '#609EA2', '#C92C6D', '#332C39'];
        const borderUsed = ['#F9F54B', '#8BF5FA', '#3F979B', '#205E61'];
        const fontSizeUsed = ['26px','28px','30px','32px'];
        allParagraph[i].style.fontFamily = fontUsed[Math.floor(Math.random() * fontUsed.length)];
        allParagraph[i].style.fontSize = fontSizeUsed[Math.floor(Math.random() * fontSizeUsed.length)];
        //allParagraph[i].style.color = colorUsed[Math.floor(Math.random() * colorUsed.length)];
        allParagraph[i].style.border = `3px solid ${borderUsed[Math.floor(Math.random() * borderUsed.length)]}`;
        allParagraph[i].style.background = backgroundUsed[Math.floor(Math.random() * backgroundUsed.length)];
    }

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
    console.log(`2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color`);
    allParagraph.forEach((paragraph, i) => {
        i % 2 === 0 ? paragraph.style.color = 'green' : paragraph.style.color = 'red';
    });

// 3. Set text content, id and class to each paragraph
    console.log(`Set text content, id and class to each paragraph`);
    for(let i=0; i<allParagraph.length; i++){
        allParagraph[i].textContent = `this is a new paragraph ${i+1}`;
        allParagraph[i].className = `all-paragraph-class-${i+1}`
        allParagraph[i].id = `all-paragraph-id-${i+1}`;
    }

// ------------------------------ End Exercises: Level 2 ------------------------------