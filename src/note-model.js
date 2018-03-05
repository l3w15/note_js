Note = function(string) {
  this._content = string;
};

Note.prototype.returnString = function () {
  return this._content;
};
