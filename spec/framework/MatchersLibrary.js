//
// describe = function(string) {
//   if (typeof string !== "string") {
//     displayError(new Error("Incorrect syntax: description must be a string");
//   };
//   console.log(string)
// };

var assert = {
  isTrue: function (assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error(assertionToCheck + " is not truthy!")
    } else if (!!assertionToCheck) {
      console.log("Life is green!")
    }
  }
};

// Printing out stack trace with only filename and line to html
var path = 'file:///Users/trapet/apps/training/makers_academy/week7/note_js/SpecRunner.html:38:3'
var fileDisplay = path.match(/[\w-]+\.[\w-]+\:\w*/g)
console.log(fileDisplay[0])

////////////////

function expect(subject) {
  return new Test(subject);
}

function describe(string, callback){
  console.log("%c**** " + string + " ***", 'background: #efacdd');
  // document.getElementById("tests").appendChild(`<div>${string}</div>`)
  document.write(`<div class="desc" >***** ${string} ******* </div>`);
  callback();
}

function it(string, callback){
  document.write(`<div class="it" >    ** ${string} ** </div>`)
  beforeEach(beforeEachFunction);
  console.log(string);
  callback();
  console.log("%cHannah is a happy bunny", 'color: #30a337')
}

var beforeEachFunction;

function beforeEach(callback) {
  beforeEachFunction = callback;
  if (callback) {
    callback();
  }
};

var err;

function displayError(err) {
  document.write(err)
  var stackRegEx = err.stack.match(/[\w-]+\.[\w-]+\:\w*/g);
  for (i = 1; i < stackRegEx.length; i++) {
    document.write(`<div class="err">${stackRegEx[i]}</div>`)
  }
}

function Test(subject) {
  this.subject = subject
  this.secretSquirrel = false
}


Test.prototype = {

  not: function() {
    this.secretSquirrel = true
    return this
  },

  toBe: function(expectation) {
    if (this.secretSquirrel === false) {
      if (this.subject !== expectation) {
        displayError(new Error(`${this.subject} is not equal to ${expectation}`));
        // displayError(err);
      }
    } else {
      if (this.subject === expectation) {
        displayError(new Error(`${this.subject} is equal to ${expectation}`));
      }
    }
  },

  toMatchArray: function(expectation) {
    if(this.secretSquirrel === false) {
      if ( !Array.isArray(this.subject) || !Array.isArray(expectation) ) {
        displayError(new Error("One or more of these elements is not an array"))
      }
      if (this.subject.length !== expectation.length) {
        console.log(this.subject)
        displayError(new Error(`${this.subject} is not the same length as ${expectation}!`));
      }
      for (i = 0; i < this.subject.length; i++) {
        if (this.subject[i] !== expectation[i]) {
          displayError(new Error (`${this.subject} does not match ${expectation}!`))
        }
      }
    } else {
      if ( !Array.isArray(expectation) ) {
        displayError(new Error(`${expectation} is not an array`))
      }
      if (this.subject.length === expectation.length) {
        for (i = 0; i < this.subject.length; i++) {
          if (this.subject[i] === expectation[i]) {
            displayError(new Error ("Arrays are equal"))
          }
        }
      }
    }
  },

};
