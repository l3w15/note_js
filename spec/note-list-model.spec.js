

describe('List', function(){
  it('list is a defined object', function(){
    var list = new List();
    expect(typeof list).toBe("object")
  });
  it('initializes with a notes property as an empty array', function(){
    var list = new List();
    expect(list._notes.length).toBe(0)
  })
});

describe('addNote', function(){
  it('adds a note to the list', function(){
    var list = new List();
    list.addNote("test");
    expect(list._notes[0].returnString()).toBe("test")
  })
})

describe('printNotes', function(){
  it('returns all notes', function(){
    var list = new List();
    var note = new Note("test");
    var a = [];
    list._notes.push(note);
    expect(list.printNotes()).toMatchArray([note])
  })
})

// describe('::printNotes returns all notes::');
// function testPrintNotes() {
//   var list = new List();
//   list.addNote("test");
//   assert.isTrue(list.printNotes() === "test");
// };
// testPrintNotes();

// describe('::printNotes returns all notes::');
// function testPrintNotes() {
//   var list = new List();
//   var note = new Note("test");
//   var a = [];
//   a.push(note);
//   list._notes.push(note);
//   matchArrays(list.printNotes(), a);
// }
// testPrintNotes();

// Refactored tests

// function testListInit() {
//   var list = new List();
//   assert.isTrue(typeof list === "object");
// };
// testListInit();

// describe('::_notes initializes as an empty array::');
// function testListNotes() {
//   var list = new List();
//   // this is a sneaky way of testing that it initializes
//   // as an empty array - as in JS two arrays are never the same
//   // [1,2,3] === [1,2,3] # => returns false
//   assert.isTrue(list._notes.length === 0);
// };
// testListNotes();

// describe('::addNote adds a note::');
// function testAddNote() {
//   var list = new List();
//   list.addNote("test");
//   assert.isTrue(list._notes[0]._text === "test");
// };
// testAddNote();
