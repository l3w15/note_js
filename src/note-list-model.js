
List = function() {
  this._notes = [];
}

List.prototype = {

  // printNotes: function() {
  //   for ( i = 0; i < this._notes.length; i++) {
  //     return this._notes[i].returnString();
  //   }
  // },

  printNotes: function() {
    this._notes.forEach(element => {
      return element;
    });
  },

  addNote: function(string) {
    note = new Note(string);
    this._notes.push(note);
  }
};