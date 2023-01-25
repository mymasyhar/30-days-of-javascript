const lastName = "Muharam";
try {
  console.log(`${firstName} ${lastName}`);
} catch (error) {
  console.log(`error name: ${error.name}`);
  console.log(`error message: ${error.message}`);
}

const throwErrorExampleFun = () => {
  let message;
  let x = prompt("Enter a number: ");
  try {
    if (x == "") throw "empty";
    if (isNaN(x)) throw "not a number";
    x = Number(x);
    if (x < 5) throw "too low";
    if (x > 10) throw "too high";
  } catch (err) {
    console.log(err);
  }
};
throwErrorExampleFun();
