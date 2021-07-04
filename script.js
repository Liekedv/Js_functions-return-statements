// Checking if a number is big

const add = function (number) {
  const sum = number;
  if (number > 100) {
    return "true"
  }
  return "false";
};

const result = add(10);
console.log (result);


// Bouncer at a club
const brendaBot = function ([age, peopleIn]) {
  if (age < 18) {
      return 'this is a club for adults';
  }
  else if (peopleIn > 500) {
      return 'its too busy now, come back later';
  } 
  else {
  return 'come in';
  }
};
const maxNumber = brendaBot([29, 55]);
console.log(maxNumber);


// Calculating the average
const calculateAverage = function (numbers) {
  const average = numbers.reduce((total, n) => total + n) / numbers.length;
  console.log(average);    
};

const randomNumbers = [13, 5, 4, 18, 9];
calculateAverage(randomNumbers);
