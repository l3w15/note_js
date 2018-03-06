
describe = function(string) {
  if (typeof string !== "string") {
    throw new Error("Incorrect syntax: description must be a string");
  };
  console.log(string)
};

var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(assertionToCheck + " is not truthy!")
    } else if (!!assertionToCheck) {
      console.log("Life is green!")
    }
  }
};

function expect(subject) {
  return new Test(subject);
}

function Test(subject) {
  this.subject = subject
}

Test.prototype = {
  
  toBe: function(expectation) {
    return this.subject === expectation;
  }
};


