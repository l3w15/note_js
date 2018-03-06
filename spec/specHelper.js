
// creates new List and populates it with two notes
populate = function() {
  list = new List();
  list.addNote("test1");
  list.addNote("test2");
};

function matchArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      throw new Error(`${array1} and ${array2} don't match!`)
    } else {
      console.log("Life is green!")
    }
  }
};
