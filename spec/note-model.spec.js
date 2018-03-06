
// use `populate` in console to create new List and populate with 2 notes
describe('::_text property is a string::');
function testNoteContent() {
  var note = new Note("kaari is green");
  assert.isTrue(note._text === "kaari is green");
};
testNoteContent()

describe('::_text property equals input string::');
function testExpectNote() {
  var note = new Note("kaari is green");
  assert.isTrue(expect(note._text).toBe("kaari is green"))
};

describe('::returns note text::');
function testReturnString() {
  var note = new Note("kaari is green");
  assert.isTrue(note.returnString() === "kaari is green");
};
testReturnString()

