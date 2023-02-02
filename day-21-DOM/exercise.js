// ------------------------------ Exercises: Level 1 ------------------------------

// 1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name
    console.log(`1. Create an index.html file and put four p elements as above: Get the first paragraph by using document.querySelector(tagname) and tag name`);
    const firstParagraph = document.querySelector('p');
    console.log(firstParagraph.textContent);

// 2. Get each of the the paragraph using document.querySelector('#id') and by their id
    console.log(`2. Get each of the the paragraph using document.querySelector('#id') and by their id`);
    const allParagraph = document.querySelectorAll('p');
    allParagraph[0].id = 'first-paragraph';
    allParagraph[1].id = 'second-paragraph';
    allParagraph[2].id = 'third-paragraph';
    allParagraph[3].id = 'fourth-paragraph';
    console.log(allParagraph);
    const firstIdParagraph = document.querySelector('#first-paragraph');
    console.log(firstIdParagraph.textContent);
    const secondIdParagraph = document.querySelector('#second-paragraph');
    console.log(secondIdParagraph.textContent);
    const thirdIdParagraph = document.querySelector('#third-paragraph');
    console.log(thirdIdParagraph.textContent);
    const fourthIdParagraph = document.querySelector('#fourth-paragraph');
    console.log(fourthIdParagraph.textContent);

// 3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name
    console.log(`3. Get all the p as nodeList using document.querySelectorAll(tagname) and by their tag name`);
    const allParagraphElements = document.querySelectorAll('p');
    console.log(allParagraphElements);

// 4. Loop through the nodeList and get the text content of each paragraph
    console.log(`4. Loop through the nodeList and get the text content of each paragraph\n`);
    for(let i=0; i<allParagraphElements.length; i++){
        console.log(allParagraphElements[i].textContent);
    }
    

// 5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph
    console.log(`5. Set a text content to paragraph the fourth paragraph,Fourth Paragraph`);
    fourthIdParagraph.textContent = 'Fourth Paragraph';
    console.log(fourthIdParagraph);

// 6. Set id and class attribute for all the paragraphs using different attribute setting methods
    console.log(`6. Set id and class attribute for all the paragraphs using different attribute setting methods`);
    //setting class
    for(let i=0; i<allParagraphElements.length; i++){
        if(allParagraphElements[i] == 0){
            allParagraphElements[i].className = `paragraph-${i}`
            allParagraphElements[i].id = `paragraph-${i}`
        } else{
            allParagraphElements[i].className = `paragraph-${i+1}`
            allParagraphElements[i].id = `paragraph-${i+1}`
        }
    }
    console.log(allParagraphElements);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)
    console.log(`1. Change style of each paragraph using JavaScript(eg. color, background, border, font-size, font-family)`);
    for(let i=0; i<allParagraphElements.length; i++){
        const colors = ['red','green','blue','pink','black', 'beige'];
        //allParagraphElements[i].style.color = colors[Math.floor(Math.random() * colors.length)];
        //allParagraphElements[i].style.background = colors[Math.floor(Math.random() * colors.length)];
        //allParagraphElements[i].style.border = `5px solid ${colors[Math.floor(Math.random() * colors.length)]}`;
        //allParagraphElements[i].style.fontSize = `${Math.floor(Math.random() * 100)}px`
        allParagraphElements[i].style.fontFamily = 'sans-serif';
    }

// 2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color
    console.log(`2. Select all paragraphs and loop through each elements and give the first and third paragraph a color of green, and the second and the fourth paragraph a red color`);
    allParagraphElements.forEach((paragraph, i) => {
        i % 2 == 0 ? paragraph.style.color = 'red' : paragraph.style.color = 'green'
    });

// 3. Set text content, id and class to each paragraph
    console.log(`3. Set text content, id and class to each paragraph`);
    for(let i=0; i<allParagraphElements.length; i++){
        if(allParagraphElements[i] == 0){
            allParagraphElements[i].textContent = `new paragraph ${i}`;
            allParagraphElements[i].id = `new-paragraph-id-${i}`;
            allParagraphElements[i].className = `new-paragraph-class-${i}`
        }else{
            allParagraphElements[i].textContent = `new paragraph ${i+1}`;
            allParagraphElements[i].id = `new-paragraph-${i+1}`;
            allParagraphElements[i].className = `new-paragraph-class-${i+1}`
        }
    }
// ------------------------------ End Exercises: Level 2 ------------------------------