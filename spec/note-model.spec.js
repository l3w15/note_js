
// use `populate` in console to create new List and populate with 2 notes

describe('_text', function(){
  it('stores the string as a text property', function(){
    var note = new Note("kaari is green");
    expect(note._text).toBe("kaari is green")
  })
});

describe('returnString', function(){
  it('returns the text property of the note', function(){
    var note = new Note("kaari is green");
    expect(note.returnString()).toBe("kaari is green")
  })
});

// Refactored Tests

// describe('::_text property is a string::', );
// function testNoteContent() {
  // var note = new Note("kaari is green");
//   assert.isTrue(note._text === "kaari is green");
// };
// testNoteContent()

// describe('::returns note text::');
// function testReturnString() {
//   var note = new Note("kaari is green");
//   assert.isTrue(note.returnString() === "kaari is green");
// };
// testReturnString()
