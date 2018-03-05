function testNoteContent() {
  var note = new Note("kaari is green");
  assert.isTrue(note._text === "kaari is green");
};
testNoteContent()

function testReturnString() {
  var note = new Note("kaari is green");
  assert.isTrue(note.returnString() === "kaari is green");
};
testReturnString()
