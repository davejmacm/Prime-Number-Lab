const PubSub = require('../helpers/pub_sub.js');

const PrimeChecker = function () {

};

PrimeChecker.prototype.bindEvents = function() {
  PubSub.subscribe("FormView:number-submitted", (event) => {
    const inputtedNumber = event.detail;
    const result = this.primeChecker(inputtedNumber);
    const payload = {result:result, number:inputtedNumber}
    PubSub.publish("PrimeChecker:result-checked", payload);
  });
};

PrimeChecker.prototype.primeChecker = function (number) {
  if (number <= 1) {
   return false;
 }
 for (let i = 2; i < number; i++) {
   if (number % i === 0) {
       return false;
   }
 }
 return true;
};

module.exports = PrimeChecker;
