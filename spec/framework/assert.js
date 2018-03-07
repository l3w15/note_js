
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

////////////////

function expect(subject) {
  return new Test(subject);
}

function Test(subject) {
  this.subject = subject
}

Test.prototype = {
  
  toBe: function(expectation) {
    return this.subject === expectation;
  },
  toMatchArray: function(expectation) {
    if ( !Array.isArray(this.subject) || !Array.isArray(expectation) ) {
      throw new Error("One or more of these elements is not an array")
    }
    if (this.subject.length !== expectation.length) {
      console.log(this.subject)
      throw new Error(`${this.subject} is not the same length as ${expectation}!`);
    }
    for (i = 0; i < this.subject.length; i++) {
      if (this.subject[i] !== expectation[i]) {
        throw new Error (`${this.subject} does not match ${expectation}!`)
      }
    } console.log("Life is green!")
  }
};
