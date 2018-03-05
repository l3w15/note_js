function testNoteContent() {
  var note = new Note("kaari is green");
  assert.isTrue(note._content === "kaari is green");
};
testNoteContent()

function testReturnString() {
  var note = new Note("kaari is green");
  assert.isTrue(note.returnString() === "kaari is green");
};
