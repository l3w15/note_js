
describe('::List initializes as an object of type List::')
function testListInit() {
  var list = new List();
  assert.isTrue(typeof list === "object");
};
testListInit();

describe('::_notes initializes as an empty array::');
function testListNotes() {
  var list = new List();
  // this is a sneaky way of testing that it initializes
  // as an empty array - as in JS two arrays are never the same
  // [1,2,3] === [1,2,3] # => returns false
  assert.isTrue(list._notes.length === 0);
};
testListNotes();

describe('::addNote adds a note::');
function testAddNote() {
  var list = new List();
  list.addNote("test");
  assert.isTrue(list._notes[0]._text === "test");
};
testAddNote();

// describe('::printNotes returns all notes::');
// function testPrintNotes() {
//   var list = new List();
//   list.addNote("test");
//   assert.isTrue(list.printNotes() === "test");
// };
// testPrintNotes();

describe('::printNotes returns all notes::');
function testPrintNotes() {  
  var list = new List();
  var note = new Note("test");
  var a = [];
  a.push(note);
  list._notes.push(note);
  matchArrays(list.printNotes(), a);
}
testPrintNotes();