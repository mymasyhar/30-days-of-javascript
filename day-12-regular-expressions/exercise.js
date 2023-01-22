// ------------------------------ Exercises: Level 1 ------------------------------

// 1, Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’
    console.log(`\n`);
    console.log(`Calculate the total annual income of the person from the following text. ‘He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.’`);
    function findSalary(){
        const text1_1 = `He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.`;
        const regex1_1 = /\d+/g;
        const numInText1_1 = text1_1.match(regex1_1);
        let salary = 0;
        for(const num of numInText1_1){
            salary += Number(num);
        }
        return salary;
    }
    console.log(findSalary(), `\n`);

// 2. The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.
    console.log(`The position of some particles on the horizontal x-axis -12, -4, -3 and -1 in the negative direction, 0 at origin, 4 and 8 in the positive direction. Extract these numbers and find the distance between the two furthest particles.`);
    const points = ['-1', '2', '-4', '-3', '-1', '0', '4', '8', '10'];
    let sortedPoints = [];
    for(const num of points){
        sortedPoints.push(Number(num));
    }
    sortedPoints.sort((a,b) => a - b);
    let startPoint = sortedPoints[0];
    let endPoint = sortedPoints[sortedPoints.length-1];
    let distance = 0;
    while (startPoint < endPoint){
        distance +=1;
        startPoint += 1;
    }
    console.log(distance);

// 3. Write a pattern which identify if a string is a valid JavaScript variable
    console.log(`Write a pattern which identify if a string is a valid JavaScript variable`);
    function is_valid_variable(variable){
        const validRegex = /^(\W+|\d+)|(\W+)|\W+$/gm;
        const result = validRegex.test(variable);
        if(!result){
            return `the variable are valid`;
        }else{
            return `invalid variable`;
        }
    }
    console.log(is_valid_variable('Masyhar'), `\n`);

// ------------------------------ End Exercises: Level 1 ------------------------------

// ------------------------------ Exercises: Level 2 ------------------------------

// 1. Write a function called tenMostFrequentWords which get the ten most frequent word from a string?
    console.log(`Write a function called tenMostFrequentWords which get the ten most frequent word from a string?`);
    const paragraph = `I love teaching. If you do not love teaching what else can you love. I love Python if you do not love something which can give you all the capabilities to develop an application what else can you love.`
    function tenMostFrequentWords(paragraph, numOfWords){
        const wordUsed = paragraph.split(/[\s,.]+/g);
        const wordGroup = {};
        for(let i=0; i<wordUsed.length; i++){
            if(wordGroup[wordUsed[i]] == undefined){
                wordGroup[wordUsed[i]] = 1;
            }else{
                wordGroup[wordUsed[i]] += 1;
            }
        }
        const result = Object.entries(wordGroup).sort((a,b) => b[1] - a[1]).slice(0, numOfWords);
        return result;

    }
    console.log(tenMostFrequentWords(paragraph, 10), `\n`);

// ------------------------------ End Exercises: Level 2 ------------------------------

// ------------------------------ Exercises: Level 3 ------------------------------

// 1. Write a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.
    console.log(`Writ a function which cleans text. Clean the following text. After cleaning, count three most frequent words in the string.`);
    function cleanText(sentence){
        const regex = /[^\w\s,?,.]/g;
        const result = sentence.replace(regex, '');
        return result;
    }
    sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`
    console.log(cleanText(sentence), `\n`);

// 2. Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.
    console.log(`Write a function which find the most frequent words. After cleaning, count three most frequent words in the string.`);
    function mostFrequentWords(cleanedText){
        const result = sentence.replace(/[^\w\s]/g, '');
        const words = result.split(' ');
        const wordGroup = {};
        for(let i=0; i<words.length; i++){
            if(wordGroup[words[i]] == undefined){
                wordGroup[words[i]] = 1;
            }else{
                wordGroup[words[i]] += 1;
            }
        }
        const frequentWords = Object.entries(wordGroup).sort((a,b) => b[1] - a[1]).map(word => ({
            word: word[0],
            count: word[1]
        })).slice(0,3);
        return frequentWords;
    }
    console.log(mostFrequentWords(sentence), `\n`);