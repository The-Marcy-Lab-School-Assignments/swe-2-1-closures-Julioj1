const makeIdFunc = () => {
  let count = 1;
  const counter = () => {
    console.log(count);
    return count++;
  }
  return counter
};

const makePasswordChecker = (correctPassword) => {

};

const makeMultiplier = (multiplier) => {

};

const makeFilterByLength = (length) => {

};

const makeGradeTracker = () => {

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
