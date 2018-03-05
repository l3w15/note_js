// create function that takes argument string
// and creates new Note passing string as argument
// so that it's stored in note._text
// and pushes new Note into List.arrayOfNotes

List = function() {
  this._notes = [];
}

List.prototype = {

  printNotes: function() {
    this._notes.forEach (function(note) {
      return note.returnString();
    })
  },

  addNote: function(string) {
    note = new Note(string);
    this._notes.push(note);
  }
};