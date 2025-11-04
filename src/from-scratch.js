const makeIdFunc = () => {
  let count = 1;
  const counter = () => {
    console.log(count);
    return count++;
  }
  return counter;
};

const makePasswordChecker = (correctPassword) => {
  let count = 0;
  const guesser = (guess) => {
    count++;
    if (count > 3) {
      return "Account locked";
    } else if (guess != correctPassword) {
      return false;
    } else if (guess === correctPassword) {
      return true;
    }
  }
  return guesser;
};

const makeMultiplier = (multiplier) => {
  const multiplicator = (arrOfNumbers) => {
    return arrOfNumbers.map((number) => number * multiplier);
  }
  return multiplicator;
};

const makeFilterByLength = (length) => {
  const filter = (arrOfStrings) => {
    return arrOfStrings.filter((string) => string.length <= length)
  }
  return filter;
};

const makeGradeTracker = () => {
  const grades = [];
  const studentsGrades = {
    addGrade(grade) {
      if (grade >= 0 && grade <= 100) {
        grades.push(grade);
        return true;
      } else {
        return false;
      }
    },
    getAverage() {
      if (grades.length === 0) {
        return 0;
      }
      const total = grades.reduce((gradeTotal, currentGrade) => gradeTotal + currentGrade, 0);
      return total / grades.length;
    }
  }
  return studentsGrades;
};

const makeShoppingList = () => {

};

module.exports = {
  makeIdFunc,
  makePasswordChecker,
  makeMultiplier,
  makeFilterByLength,
  makeGradeTracker,
  makeShoppingList,
};
