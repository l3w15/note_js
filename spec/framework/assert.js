
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
