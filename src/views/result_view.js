const PubSub = require('../helpers/pub_sub.js');
// const FormView = require('../views/form_view.js');

const ResultView = function () {

};


ResultView.prototype.bindEvents = function() {
  PubSub.subscribe("PrimeChecker:result-checked", (event) => {
    const primeChecked = event.detail;
    this.displayResult(primeChecked);
  });

};

ResultView.prototype.displayResult = function(result) {
  const resultElement = document.querySelector("#result");
  if (result.result === true) {
    resultElement.textContent = `The number ${result.number} is a prime number!` 
  }
  else {
    resultElement.textContent = `The number ${result.number} is not a prime number, boo!`
  }
};

module.exports = ResultView;
