const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
];

// ------------------------------ Exercises: Level 2 ------------------------------

//5. In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
if(webTechs.includes('Sass')){
  console.log('Sass is a CSS preprocess');
  console.log(webTechs);
} else {
  webTechs.push('Sass');
  console.log(webTechs);
}

// ------------------------------ End Exercises: Level 2 ------------------------------



