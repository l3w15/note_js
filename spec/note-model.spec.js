describe('::_text property is a string::');
function testNoteContent() {
  var note = new Note("kaari is green");
  assert.isTrue(note._text === "kaari is green");
};
testNoteContent()

describe('::returns note text::');
function testReturnString() {
  var note = new Note("kaari is green");
  assert.isTrue(note.returnString() === "kaari is green");
};
testReturnString()
