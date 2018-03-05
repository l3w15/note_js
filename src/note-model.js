// THIS IS NOT TDD. ANGERY-FACE! ò.ó

// Note = function(string) {
//   this.content = string;
// }

// Note.prototype.returnString = function() {
//   console.log(this.content)
// }

Note = function(string) {
  this._content = string;
};

Note.prototype.returnString = function () {
  console.log("kaari is green");
};
